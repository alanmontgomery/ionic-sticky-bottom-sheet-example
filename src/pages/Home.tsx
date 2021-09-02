import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid } from '@ionic/react';
import { useState } from 'react';
import { BottomSheet } from '../components/BottomSheet';
import './Home.css';

const Home: React.FC = () => {

  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(true);

  const handleClose = () => {

    setShowBottomSheet(false);
    setTimeout(() => {
      setShowBottomSheet(true);
    }, 10);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <BottomSheet isOpen={showBottomSheet} close={handleClose} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
