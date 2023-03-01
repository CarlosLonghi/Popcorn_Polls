import { Container } from "./styles";

export function ButtonText({ title, isActive = false, icon: Icon, ...rest }) {
  return (
    <Container
      type="button"
      isActive={isActive}
      {...rest}
    >
      {Icon && <Icon size={25}/>}
      {title}
    </Container>
  )
}