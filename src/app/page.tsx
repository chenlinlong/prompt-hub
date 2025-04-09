import PromptCard from "./components/card";

const prompts = [{
  title: 'title1',
  content: 'content1',
  tags: ['tag1'],
}, {
  title: 'title2',
  content: 'content2',
  tags: ['tag2'],
}, {
  title: 'title3',
  content: 'content3',
  tags: ['tag3'],
}, {
  title: 'title4',
  content: 'content4',
  tags: ['tag4'],
}]

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">My Prompts</h1>
      {
        prompts.map((item, index) => (
          <PromptCard title={item.title} tags={item.tags} content={item.content} key={item.title + index}></PromptCard>
        ))
      }
    </main>
  );
}
