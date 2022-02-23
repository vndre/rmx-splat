import { useParams } from "remix";

export const loader = async ({
  params,
}) => {
  console.log("🚀 ~ file: $path.jsx ~ line 6 ~ params", params)
};

export const action = async ({
  params,
}) => {
  console.log(params["*"]);
};

export default function splat() {
  return <h1>splatted</h1>
}