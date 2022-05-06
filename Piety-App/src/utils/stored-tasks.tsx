import shortid from "shortid"

export const storedData = [
  {
    id: shortid.generate(),
    subject: "click me to edit",
    done: false,
  }
]

module.exports = {storedData}
