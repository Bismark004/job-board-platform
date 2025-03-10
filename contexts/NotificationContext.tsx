import { createContext, useContext,  useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Notification = {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  timestamp: number;
};

type NotificationContextType = {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  dismissNotification: (id: string) => void;
};

const NotificationContext = createContext<NotificationContextType>(null!);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  
  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp'>) => {
    const newNotification = {
      ...notification,
      id: uuidv4(),
      timestamp: Date.now()
    };
    
    setNotifications(prev => [newNotification, ...prev]);
  };

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, dismissNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);