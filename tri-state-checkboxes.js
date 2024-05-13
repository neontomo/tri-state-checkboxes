function toggleCheckbox(checkbox) {
  const fillType = checkbox.classList[1]

  checkbox.classList.replace(
    fillType,
    {
      default: 'half',
      half: 'full',
      full: 'default'
    }[fillType]
  )
}

document.querySelectorAll('.checkbox').forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    toggleCheckbox(checkbox)
  })
})
