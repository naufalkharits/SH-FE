export const EditButton = (props) => {
  return (
    <button
      className="mb-4 mt-6 hidden w-full rounded-2xl bg-primary-purple-04 p-2 text-white hover:bg-primary-purple-05 sm:block"
      onClick={() => {
        props.navigate(`/manage-product/edit/${props.params}`, {
          state: {
            from: props.location,
          },
        })
      }}>
      Edit
    </button>
  )
}
