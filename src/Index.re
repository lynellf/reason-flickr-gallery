[@bs.val] external document: Js.t({..}) = "document";

let main = () => {
  let entryPoint = document##getElementById("app");

  ReactDOMRe.render(
    <App apiKey="" />,
    entryPoint,
  );
};

main();
