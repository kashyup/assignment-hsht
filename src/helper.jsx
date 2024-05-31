import * as React from "react";

/** @jsx jsx */
import { jsx } from "@emotion/react";

function MyComponent() {
  return (
    <div className="footer"
      css={{
        justifyContent: "center",
        alignItems: "start",
        borderRadius: "50px",
        borderColor: "rgba(185, 185, 185, 0.75)",
        borderStyle: "solid",
        borderWidth: "2px",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        fontWeight: "700",
        whiteSpace: "nowrap",
        padding: "80px 60px",
        "@media (max-width: 991px)": {
          whiteSpace: "initial",
          padding: "0 20px",
        },
      }}
    >
      <div className="footer-inner-container"
        css={{
          display: "flex",
          width: "1125px",
          maxWidth: "100%",
          flexDirection: "column",
          margin: "644px 0 0 84px",
          "@media (max-width: 991px)": {
            marginTop: "40px",
            whiteSpace: "initial",
          },
        }}
      >
        <div
          css={{
            borderColor: "rgba(230, 230, 235, 1)",
            borderStyle: "solid",
            borderWidth: "1px",
            backgroundColor: "#E6E6EB",
            height: "1px",
            "@media (max-width: 991px)": {
              maxWidth: "100%",
            },
          }}
        />
        <div
          css={{
            alignSelf: "center",
            display: "flex",
            width: "309px",
            maxWidth: "100%",
            gap: "20px",
            fontSize: "20px",
            textAlign: "right",
            justifyContent: "space-between",
            margin: "36px 0 0 112px",
            "@media (max-width: 991px)": {
              whiteSpace: "initial",
            },
          }}
        >
          <div
            css={{
              color: "var(--Text-Black, #000)",
              fontFamily:
                "Almarai, sans-serif",
            }}
          >
            Subtotal
          </div>
          <div
            css={{
              color: "var(--Text-Roman-Silver, #82828B)",
              fontFamily:
                "Almarai, sans-serif",
            }}
          >
            £4.70
          </div>
        </div>
        <div
          css={{
            borderColor: "rgba(230, 230, 235, 1)",
            borderStyle: "solid",
            borderWidth: "1px",
            backgroundColor: "#E6E6EB",
            marginTop: "42px",
            height: "1px",
            "@media (max-width: 991px)": {
              maxWidth: "100%",
              marginTop: "40px",
            },
          }}
        />
        <div
          css={{
            borderColor: "rgba(230, 230, 235, 1)",
            borderStyle: "solid",
            borderWidth: "1px",
            backgroundColor: "#E6E6EB",
            zIndex: "10",
            height: "1px",
            "@media (max-width: 991px)": {
              maxWidth: "100%",
            },
          }}
        />
        <div
          css={{
            alignSelf: "center",
            display: "flex",
            width: "314px",
            maxWidth: "100%",
            gap: "20px",
            fontSize: "20px",
            textAlign: "right",
            justifyContent: "space-between",
            margin: "36px 0 0 110px",
            "@media (max-width: 991px)": {
              whiteSpace: "initial",
            },
          }}
        >
          <div
            css={{
              color: "var(--Text-Black, #000)",
              fontFamily:
                "Almarai, sans-serif",
            }}
          >
            Discount
          </div>
          <div
            css={{
              color: "var(--Text-Roman-Silver, #82828B)",
              fontFamily:
                "Almarai, sans-serif",
            }}
          >
            £0.00
          </div>
        </div>
        <div
          css={{
            borderColor: "rgba(230, 230, 235, 1)",
            borderStyle: "solid",
            borderWidth: "1px",
            backgroundColor: "#E6E6EB",
            marginTop: "42px",
            height: "1px",
            "@media (max-width: 991px)": {
              maxWidth: "100%",
              marginTop: "40px",
            },
          }}
        />
        <div
          css={{
            borderColor: "rgba(230, 230, 235, 1)",
            borderStyle: "solid",
            borderWidth: "1px",
            backgroundColor: "#E6E6EB",
            zIndex: "10",
            height: "1px",
            "@media (max-width: 991px)": {
              maxWidth: "100%",
            },
          }}
        />
        <div
          css={{
            alignSelf: "end",
            display: "flex",
            width: "553px",
            maxWidth: "100%",
            gap: "20px",
            justifyContent: "space-between",
            margin: "22px 20px 0 0",
            "@media (max-width: 991px)": {
              marginRight: "10px",
              flexWrap: "wrap",
              whiteSpace: "initial",
            },
          }}
        >
          <div
            css={{
              color: "var(--Text-Black, #000)",
              textAlign: "right",
              margin: "auto 0",
              font: "20px Almarai, sans-serif ",
            }}
          >
            Total
          </div>
          <div
            css={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              "@media (max-width: 991px)": {
                whiteSpace: "initial",
              },
            }}
          >
            <div
              css={{
                color: "var(--Text-Roman-Silver, #82828B)",
                textAlign: "right",
                margin: "auto 0",
                font: "20px Almarai, sans-serif ",
              }}
            >
              £4.70
            </div>
            <div
              css={{
                justifyContent: "center",
                borderRadius: "8px",
                backgroundColor: "#7FD287",
                color: "var(--Text-White, #FFF)",
                letterSpacing: "-0.32px",
                padding: "16px 32px",
                font: "16px Almarai, sans-serif ",
                "@media (max-width: 991px)": {
                  whiteSpace: "initial",
                  padding: "0 20px",
                },
              }}
            >
              Checkout
            </div>
          </div>
        </div>
        <div
          css={{
            borderColor: "rgba(230, 230, 235, 1)",
            borderStyle: "solid",
            borderWidth: "1px",
            backgroundColor: "#E6E6EB",
            marginTop: "25px",
            height: "1px",
            "@media (max-width: 991px)": {
              maxWidth: "100%",
            },
          }}
        />
      </div>
    </div>
  );
}

