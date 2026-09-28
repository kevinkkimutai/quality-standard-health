import { buildSchema, graphql } from "graphql";
import { NextResponse } from "next/server";
import { ADDRESS, EMAIL, PHONE, SITE_URL, SERVICE_GROUPS, TEAM } from "@/lib/data";

const schema = buildSchema(`
  type Site { name: String!, url: String!, email: String!, phone: String!, address: String! }
  type Service { title: String!, items: [String!]! }
  type TeamMember { name: String!, role: String!, image: String! }
  type Query { site: Site!, services: [Service!]!, team: [TeamMember!]! }
`);

const rootValue = {
  site: { name: "Quality Standard Health Care LTD", url: SITE_URL, email: EMAIL, phone: PHONE, address: ADDRESS },
  services: SERVICE_GROUPS,
  team: TEAM.map(({ name, role, img }) => ({ name, role, image: img })),
};

export async function POST(request: Request) {
  let body: { query?: string; variables?: Record<string, unknown>; operationName?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ errors: [{ message: "Request body must be valid JSON." }] }, { status: 400 });
  }

  if (!body.query) {
    return NextResponse.json({ errors: [{ message: "A GraphQL query is required." }] }, { status: 400 });
  }

  const result = await graphql({
    schema,
    source: body.query,
    rootValue,
    variableValues: body.variables,
    operationName: body.operationName,
  });

  return NextResponse.json(result, { status: result.errors ? 400 : 200 });
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  if (!query) {
    return NextResponse.json({ errors: [{ message: "Add a GraphQL query in the query parameter." }] }, { status: 400 });
  }

  const result = await graphql({ schema, source: query, rootValue });
  return NextResponse.json(result, { status: result.errors ? 400 : 200 });
}
