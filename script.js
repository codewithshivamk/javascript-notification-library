import Toast from "./start.js"

document.querySelector(".btnlefttop").addEventListener("click", () => {
  const toast = new Toast({
    text: "🚀 Simple Nuts Toaster",
    position: "top-left",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
  })
})

document.querySelector(".btnrighttop").addEventListener("click", () => {
  const toast = new Toast({
    text: "🚀 Simple Nuts Toaster",
    position: "top-right",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
  })
})

document.querySelector(".btnleftbottom").addEventListener("click", () => {
  const toast = new Toast({
    text: "🚀 Simple Nuts Toaster",
    position: "bottom-left",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
  })
})

document.querySelector(".btnrightbottom").addEventListener("click", () => {
  const toast = new Toast({
    text: "🚀 Simple Nuts Toaster",
    position: "bottom-right",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
  })
})

