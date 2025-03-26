import { useState, useEffect } from 'react';
import { Notification } from '@prisma/client';
import { toast } from 'react-hot-toast';

export function useNotifications(userId?: string) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch notifications
  const fetchNotifications = async () => {
    if (!userId) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`/api/notifications?userId=${userId}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des notifications');
      }
      
      const data = await response.json();
      setNotifications(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Une erreur est survenue'));
    } finally {
      setLoading(false);
    }
  };

  // Mark notification as read
  const markAsRead = async (notificationId: string) => {
    if (!userId) return;

    try {
      const response = await fetch(`/api/notifications/${notificationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ read: true }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de la notification');
      }

      // Update local state
      setNotifications(current => 
        current.map(notification => 
          notification.id === notificationId 
            ? { ...notification, read: true } 
            : notification
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Une erreur est survenue'));
    }
  };

  // Show toast for new notifications
  useEffect(() => {
    notifications
      .filter(notification => !notification.read)
      .forEach(notification => {
        toast(notification.message, {
          icon: '🔔',
          duration: 5000,
        });
      });
  }, [notifications]);

  // Initial fetch
  useEffect(() => {
    fetchNotifications();
  }, [userId]);

  return { 
    notifications, 
    loading, 
    error, 
    fetchNotifications, 
    markAsRead,
    unreadCount: notifications.filter(n => !n.read).length
  };
} 