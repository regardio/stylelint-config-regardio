import config from "../"
import stylelint from "stylelint"
import test from "ava"

const validCss = (
`/** @define ComponentName */

.ComponentName {
  margin: 0;
}

.ComponentName--modifierName {
  margin: 0;
}

.ComponentName-descendentName {
  margin: 0;
}

.ComponentName.is-stateOfComponent {
  margin: 0;
}

`)

const invalidCss = (
`a {
  top: 0.2em;
}

`)

test("no warnings with valid css", t => {
  return stylelint.lint({
    code: validCss,
    config: config,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.notOk(errored, "no errored")
    t.is(warnings.length, 0, "flags no warnings")
  })
})

test("a warning with invalid css", t => {
  return stylelint.lint({
    code: invalidCss,
    config: config,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.ok(errored, "errored")
    t.is(warnings.length, 1, "flags one warning")
    t.is(warnings[0].text, "Unexpected leading zero (number-leading-zero)", "correct warning text")
  })
})
