import '../App.css'

export default function CreateReservation() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-5 text-center'>
      <p>A venir: gestion des disponibilités</p>
      <span className='opacity-50 text-sm'>en attendant...</span>
      <button className='bg-blue-300 p-3 rounded tracking-wide'>Ajouter</button>
    </div>
  )
}
