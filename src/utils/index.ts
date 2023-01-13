export function css(sty: string) {
  console.log(1);
  if (typeof sty === "string") {
    let styTag = document.querySelector("style");
    if (styTag !== null) {
      sty += styTag.textContent!;
      styTag.textContent = sty;
      return;
    }
    styTag = document.createElement("style");
    styTag.textContent = sty;
    document.head.append(styTag);
  } else {
    throw new Error(`Sacho err: invalid style` + sty);
  }
}
