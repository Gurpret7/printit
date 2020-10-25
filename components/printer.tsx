import React from "react";
import * as Print from "expo-print";

export async function printFn(options: any) {
  console.log("options from print file printFn", options);

  let filePath = await Print.printAsync({
    uri: options.localUri,
  });
}

export async function selectPrinter() {
  console.log("selectPrinter insdie");

  // await Print.selectPrinterAsync().then(print);
  await Print.selectPrinterAsync().then((printer) =>
    console.log("printer---", printer)
  );
}
