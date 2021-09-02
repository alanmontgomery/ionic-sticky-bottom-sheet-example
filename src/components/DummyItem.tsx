import { IonCard, IonCardContent, IonLabel } from "@ionic/react";

interface DummyItemProps {

  number: number,
}

export const DummyItem: React.FC<DummyItemProps> = ({ number }) => {

  return (
    <IonCard>
      <IonCardContent>
        <IonLabel>
          <h2>Item number {number}</h2>
          <p>This is a dummy item</p>
        </IonLabel>
      </IonCardContent>
    </IonCard>
  );
}