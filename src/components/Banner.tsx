interface Props {
  children?: JSX.Element | JSX.Element[]
}

const Banner = ({ children }: Props) => (
  // const Banner: React.FC<{ children: any }> = (props: { children?: JSX.Element | JSX.Element[] }) => (
  <div className="section banner">
    <div className="banner_text">{children}</div>
    <div className="banner_sun"></div>
  </div>
)
export default Banner
