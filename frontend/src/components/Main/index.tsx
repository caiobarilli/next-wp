import * as S from './styles'

type MainProps = {
  title?: string
}

const Main = ({ title = 'NextJs Boilerplate' }: MainProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Main
