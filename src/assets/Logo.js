import styled from "styled-components"

export default function Logo({ svgHeight, svgWidth }) {
    return (
        <Container>
            <svg width={svgWidth} height={svgHeight} viewBox="0 0 210 210">
                <g fill="none" stroke="black" strokeWidth="3">
                    <polygon points="105 140 155 125 155 65 105 50 55 65 55 125 105 140" />
                    <line x1="105" y1="140" x2="105" y2="80" />
                    <line x1="155" y1="65" x2="105" y2="80" />
                    <line x1="55" y1="65" x2="105" y2="80" />
                    <line x1="80" y1="72.5" x2="130" y2="57.5" />
                    <polygon fill="white" points="100 134 100 115 80.85 109.15 80.85 128.15" />
                    <line strokeLinecap="round" x1="90" y1="85.5" x2="70" y2="79.5" />
                    <polygon points="123 74.6 73 59.6 87 55.4 137 70.4 137 90.4 133.5 87.45 130 92.5 126.5 89.55 123 94.6" style={{ fill: 'lightblue' }} />
                </g>
                <g id="rays" fill="none" stroke="lightblue" strokeWidth="3">
                    <line x1="105" y1="5" x2="105" y2="45" />
                    <line x1="70" y1="15" x2="70" y2="55" />
                    <line x1="140" y1="15" x2="140" y2="55" />
                </g>
                <path id="curve" fill="transparent" d="M 5 105 a  100 100 0 0,0 200 0" />
                <text x="0" style={{ fontSize: '40', fontFamily: 'Playfair Display', fontWeight: '800', letterSpacing: '8px' }}>
                    <textPath href="#curve">NINE <tspan fill="cadetblue">STORE</tspan></textPath>
                </text>
            </svg>
        </Container>
    )
}

const Container = styled.div`
    user-select: none;
`