import { prescriptionActions } from './prescription';

export const fetchPrescription = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        'https://medicine-tracker-5f889-default-rtdb.firebaseio.com/meds.json'
      );

      if (!response.ok) {
        throw new Error('Fetching prescription failed.');
      }

      const data = await response.json();

      return data;
    };

    try {
      const prescription = await fetchData();

      if (prescription === null) {
        console.log('prescription empty');
        dispatch(
          prescriptionActions.replacePrescription({
            items: [],
            totalQuantity: 0,
          })
        );
        return;
      }

      dispatch(
        prescriptionActions.replacePrescription({
          items: prescription.items,
          totalQuantity: prescription.totalQuantity,
        })
      );
    } catch {
      console.log('error occured');
    }
  };
};

export const sendPrescription = prescription => {
  return async dispatch => {
    const sendRequest = async () => {
      const response = await fetch(
        'https://medicine-tracker-5f889-default-rtdb.firebaseio.com/meds.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: prescription.items,
            totalQuantity: prescription.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();
      console.log('sent cart data!');
      dispatch(prescriptionActions.resetChangedStatus());
    } catch (error) {
      console.log(error);
    }
  };
};
