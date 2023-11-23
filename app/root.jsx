import { Links, Meta, Outlet, Scripts, Form } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>To Do List</h1>
        <div>
          <Form action="/list" method="post">
            <input placeholder="Add Item" type="text" />
            <button>Add</button>
          </Form>
        </div>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
