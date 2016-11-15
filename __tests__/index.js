import config from "../"
import stylelint from "stylelint"
import test from "ava"

const validCss = (
`/**
 * Multi-line comment
 */

.selector-1,
.selector-2,
.selector-3[type="text"] {
  display: block;
  box-sizing: border-box;
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  color: #333;
}

.selector-a,
.selector-b {
  top: calc(calc(1em * 2) / 3);
  padding: 10px !important;
}

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */
@media (min-width >= 60em) {
  .selector {
    transform: translate(1, 1) scale(3);
  }
}

@media (min-orientation: portrait), projection and (color) {
  .selector-i + .selector-ii {
    background: color(rgb(0, 0, 0) lightness(50%));
    font-family: helvetica, arial, sans-serif;
  }
}

@media screen and screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {
  .selector {
    margin: 10px;
    margin-bottom: 5px;
    height: 10rem;
    background-image:
      repeating-linear-gradient(
        -45deg,
        transparent,
        #fff 25px,
        rgba(255, 255, 255, 1) 50px
      );
    box-shadow:
      0 1px 1px #000,
      0 1px 0 #fff,
      2px 2px 1px 1px #ccc inset;
  }

  .selector::after {
    background-image: url("x.svg");
    content: "→";
  }
}
`)

const invalidCss = (
`a {
  top: .2em;
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
    t.falsy(errored, "no errored")
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
    t.truthy(errored, "errored")
    t.is(warnings.length, 1, "flags one warning")
    t.is(warnings[0].text, "Expected a leading zero (number-leading-zero)", "correct warning text")
  })
})
