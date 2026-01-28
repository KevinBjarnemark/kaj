import { appConstants } from "@/utils/constants/app-constants";
import Link from "next/link";

const SVGLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    className="flex-column-relative center w-100 h-100 shape-soft"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 2695 2695"
  >
    <path
      d="M648.333 338.75c30.834-59.583 101.25-87.083 164.167-64.167l520.833 190 520.834-190c62.916-22.916 133.333 4.584 164.166 64.167l328.334 637.083c120 232.5 42.916 509.584-160.417 652.5l130.417 359.167L2487.5 1925c69.167-25 145.833 10.417 170.833 79.583 25 69.167-10.416 145.834-79.583 170.834-197.5 72.083-395 143.75-592.5 215.833-69.167 25.417-145.833-10.417-170.833-79.583-25-69.167 10.416-145.834 79.583-170.834l170.833-62.5-130.416-359.166c-247.5 21.666-484.167-141.25-541.667-396.667l-60.833-269.583-60.834 269.583c-57.5 255.417-294.166 418.333-541.666 396.667L600 2078.333l170.833 62.5c69.167 25.417 105 101.667 79.584 170.834-25.417 69.166-101.667 105-170.834 79.583-197.5-72.083-395-144.167-592.5-215.833C17.917 2150-17.917 2073.75 7.5 2004.583 32.917 1935.417 109.583 1900 178.75 1925l170.833 62.5L480 1628.333c-202.917-142.916-279.583-420-159.583-652.5L648.333 338.75Zm183.334 226.667-113.334 220L1090 920.833l54.583-241.25-312.916-114.166Zm1003.75 0L1522.5 679.583l54.583 241.25 371.667-135.416-113.333-220Z"
      style={{
        fill: "#fff",
        fillRule: "nonzero",
        stroke: "#49535bff",
        strokeWidth: "58.39px",
      }}
    />
  </svg>
);

const Logo = () => {
  const curvedTextSize = 250;
  const arcHeight = 20;

  return (
    <Link
      href="/"
      rel="noopener noreferrer"
      className="flex-column-relative center"
      style={{
        height: `${appConstants.dimensions.header.height}px`,
        width: "140px",
        marginTop: "-2px",
      }}
    >
      <svg
        viewBox="0 0 200 60"
        width={curvedTextSize}
        height={curvedTextSize * 0.3}
        className="flex-column-relative w-100 center shape-soft"
      >
        <defs>
          <path
            id="curve"
            d={`M 20,50 Q 100,${50 - arcHeight} 180,50`}
            fill="transparent"
          />
        </defs>
        <text
          style={{
            fill: "#ffc16bff",
            fontSize: "30px",
            fontWeight: "500",
            fontFamily: '"Lilita One", sans-serif',
            textDecoration: "underline",
          }}
        >
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            {appConstants.appName.toUpperCase()}
          </textPath>
        </text>
      </svg>

      <SVGLogo />
    </Link>
  );
};

const Header = () => {
  return (
    <header
      className="flex-column-fixed w-100 top-0"
      style={{
        height: `${appConstants.dimensions.header.height}px`,
        backgroundColor: "#2a2f31ff",
        borderBottom: "4px solid #34383bff",
      }}
    >
      <section className="flex-column-relative center w-100">
        <Logo />
      </section>
    </header>
  );
};

export default Header;
