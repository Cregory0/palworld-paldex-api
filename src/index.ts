import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";
import { queryListPals } from "./schemas";
import { ListPalsUseCase } from "./useCases";
import { cors } from '@elysiajs/cors'

const app = new Elysia()
  .use(cors())
  .use(staticPlugin())
  .get(
    "/",
    ({ query: { page, limit, term, ...filter } }) =>
      ListPalsUseCase.execute({ page, limit, term, filter }),
    {
      query: queryListPals,
    }
  )
  .listen(3000);

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`);
