import { redirect, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
export async function action({ request }) {
  const body = await request.formData();

  return redirect(`/list`);
}

export const loader = async () => {
  return { data: "test" };
};

export default function List() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <span>{data ?? ""}</span>
    </div>
  );
}
