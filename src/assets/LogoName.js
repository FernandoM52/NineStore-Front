import styled from "styled-components";

export default function LogoName({ svgHeight, svgWidth }) {
  return (
    <Container>
      <svg width={svgWidth} height={svgHeight} viewBox="0 0 267 34" style={{ backgroundColor: "transparent" }}>
        <path id="line" fill="transparent" d="M 0 31 l 310 0" />
        <text
          x="0"
          style={
            {
              fontSize: "40", fontFamily: "Playfair Display", fontWeight: "800", letterSpacing: "2.4px",
            }
          }
        >
          <textPath href="#line">NINE <tspan fill="cadetblue">STORE</tspan></textPath>
        </text>
      </svg>
    </Container>
  );
}

const Container = styled.div`
    * {
        user-select: none;
    }

    & svg {
        display: block;
    }
`;
