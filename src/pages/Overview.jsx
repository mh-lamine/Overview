import { onSnapshot } from "firebase/firestore";

export default function Overview() {
  // const [appointments, setAppointments] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(collection(db, "appointment"), (snapshot) => {
  //     setAppointments(snapshot.docs.map((doc) => doc.data()));
  //   });
  //   return () => unsubscribe();
  // })

  return <div>
    <h1>Overview</h1>
    {/* <div className="appointments">
      {appointments.map((appointment) => {
        return <div className="appointment">
          <h2>{appointment.title}</h2>
          <p>{appointment.description}</p>
          <p>{appointment.date}</p>
        </div>;
      })
    </div> */}
  </div>;
}
