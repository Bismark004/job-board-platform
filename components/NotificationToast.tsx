import { useNotifications } from '@/contexts/NotificationContext';
import { X } from 'lucide-react';

export const NotificationToast = () => {
  const { notifications, dismissNotification } = useNotifications();
  
  return (
    <div className="fixed top-4 right-4 space-y-3 z-50">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg shadow-lg flex items-center justify-between w-80
            ${notification.type === 'success' ? 'bg-green-100 border-green-200' : 
             notification.type === 'error' ? 'bg-red-100 border-red-200' :
             notification.type === 'warning' ? 'bg-yellow-100 border-yellow-200' : 
             'bg-blue-100 border-blue-200'}`}
        >
          <div>
            <p className="font-medium">{notification.message}</p>
            <p className="text-xs text-gray-600 mt-1">
              {new Date(notification.timestamp).toLocaleTimeString()}
            </p>
          </div>
          <button
            onClick={() => dismissNotification(notification.id)}
            className="text-gray-600 hover:text-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};