export const metadata = {
  title: "ProllyYes: Online toolset for everyone"
}

export default function Home() {
  return <>
    <main className="p-8 gap-6 flex flex-col">
      <h1>ProllyYes is an online toolset for everyone.</h1>

      {content.map(item => <Item key={item.title} title={item.title} link={item.link} desc={item.desc}></Item>)}
    </main>
  </>
}

function Item({ title, link, desc }) {
  return <>
    <div className="flex flex-col gap-2">
      <h2>{title} <div className="w-2 inline-block" /><h4 className="inline"><a className='text-blue-500' href={link}>Link to website</a></h4></h2>
      <p>{desc}</p>
    </div>
  </>
}

const content = [
  {
    title: 'Probability Distribution Calculator',
    link: 'https://probability.prolly-yes.com',
    desc: 'The project aims to create a simple and graphical interface for probability related tasks. With support of most commonly used probability distributions, including normal distribution, binomial distribution, possion distribution, beta distribution, etc, it generates formulas and plots for probability density functions (pdf) and cumulative distribution functions (cdf).'
  },
  {
    title: 'Statistical Tests',
    link: 'https://statistics.prolly-yes.com',
    desc: 'Pending. It aims to provide a visual way to perform statistical tests.'
  }
]