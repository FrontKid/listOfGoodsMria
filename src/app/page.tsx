import { promises as fs } from "fs";
import path from "path";
import { XMLParser } from "fast-xml-parser";
import { Products } from "./Products";
import { Suspense } from "react";


 interface IProduct {
  available: boolean;
  categoryId: number
  description: string;
  id: string | number
  image: string[] | string
  model: number
  name: string
  param: {text:string, name: string}[]
  price: number
  upc: number
  vendorCode: number
}

export type {IProduct}


export default async function Home() {
  const filePath = path.join(process.cwd(), "public", "/api/prom_ua_ru.xml");

  const xmlText = await fs.readFile(filePath, "utf-8");

  const parser = new XMLParser({
    ignoreAttributes: false,
    textNodeName: "text",
    attributeNamePrefix: "",
  });

  const data = parser.parse(xmlText);
  const products: IProduct[] = data.yml_catalog.items.item
  return (
    <section>
      <Suspense fallback={<h2 className="text-center">Подождите идет загрузка данных</h2>}>
        <Products products={products} />
      </Suspense>
    </section>
  );
}
