document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createToDOList(e.target['new-task-description'].value)
    form.reset()
  })
});

