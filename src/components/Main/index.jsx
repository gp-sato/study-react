import classes from 'components/Main/Main.module.css'
import { Links } from 'components/Links'
import { Headline } from 'components/Headline'

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>

      <Links />
    </main>
  )
}
