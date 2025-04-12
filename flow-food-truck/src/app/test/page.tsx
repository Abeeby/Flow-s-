import { MainLayout } from '@/components/layout/MainLayout';

export default function TestPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Page de test</h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Cette page sert à vérifier que le routage fonctionne correctement sur Vercel.
        </p>
        <div className="bg-green-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Diagnostic</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ App Router : fonctionne</li>
            <li>✅ MainLayout : chargé correctement</li>
            <li>✅ Route /test : accessible</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
} 