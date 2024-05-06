import { revalidateJokes } from "@/lib/actions";

// Server-side Rendering (SSR)
/* async function getAITools() {
  const res = await fetch(
    `https://official-joke-api.appspot.com/jokes/programming/ten`,
    { cache: "no-store" }
  );
  const aiTools = await res.json();

  return aiTools;
} */

// Static Site Generation (SSG)
/* async function getAITools() {
  const res = await fetch(
    `https://official-joke-api.appspot.com/jokes/programming/ten`,
    { cache: "force-cache" }
  );
  const aiTools = await res.json();

  return aiTools;
} */

// Incremental Static Regeneration (ISR)
async function getAITools() {
  const res = await fetch(
    `https://official-joke-api.appspot.com/jokes/programming/ten`,
    {
      next: { tags: ["jokes"] },
      // next: { revalidate: 10 },
    }
  );
  const aiTools = await res.json();

  return aiTools;
}

const ServerPage = async () => {
  const dynamicData = await getAITools();

  return (
    <div>
      {/* <button onClick={revalidateJokes}>Revalidate Jokes</button> */}
      <form action={revalidateJokes}>
        <button>Revalidate Jokes</button>
      </form>
      <ul>
        {dynamicData?.map(
          (data: { id: React.Key | null | undefined; punchline: string }) => (
            <li key={data.id}>{data.punchline}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default ServerPage;
