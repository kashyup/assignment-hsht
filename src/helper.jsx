import * as React from "react";

/** @jsx jsx */
import { jsx } from "@emotion/react";

function MyComponent() {
  return (
    <div
      css={{
        borderRadius: "50px",
        borderColor: "rgba(185, 185, 185, 0.75)",
        borderStyle: "solid",
        borderWidth: "2px",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "80px 60px 0",
        "@media (max-width: 991px)": {
          padding: "0 20px",
        },
      }}
    >
      <div
        css={{
          display: "flex",
          width: "1121px",
          maxWidth: "100%",
          flexDirection: "column",
          margin: "249px 0 0 68px",
          "@media (max-width: 991px)": {
            marginTop: "40px",
          },
        }}
      >
        <div
          css={{
            color: "#474747",
            font: "700 32px Almarai, sans-serif ",
            "@media (max-width: 991px)": {
              maxWidth: "100%",
            },
          }}
        >
          Trending Items
        </div>
        <div product card 
          css={{
            marginTop: "51px",
            "@media (max-width: 991px)": {
              maxWidth: "100%",
              marginTop: "40px",
            },
          }}
        >
          <div product details container
            css={{
              gap: "20px",
              display: "flex",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "stretch",
                gap: "0px",
              },
            }}
          >
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal",
                width: "50%",
                marginLeft: "0px",
                "@media (max-width: 991px)": {
                  width: "100%",
                  marginLeft: 0,
                },
              }}
            >
              <div producut card
                css={{
                  borderRadius: "30px",
                  boxShadow: "5px 5px 20px 0px rgba(133, 133, 133, 0.20)",
                  backgroundColor: "#FFF",
                  flexGrow: "1",
                  width: "100%",
                  padding: "29px 32px",
                  "@media (max-width: 991px)": {
                    maxWidth: "100%",
                    marginTop: "40px",
                    padding: "0 20px",
                  },
                }}
              >
                <div product details container
                  css={{
                    gap: "20px",
                    display: "flex",
                    "@media (max-width: 991px)": {
                      flexDirection: "column",
                      alignItems: "stretch",
                      gap: "0px",
                    },
                  }}
                >
                  <div product image
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "normal",
                      width: "50%",
                      marginLeft: "0px",
                      "@media (max-width: 991px)": {
                        width: "100%",
                        marginLeft: 0,
                      },
                    }}
                  >
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e5310000acb9c7cbe5059db783fd311e19c3ec6017b83349afaeaf09c7ea792?apiKey=a45cd760213d4a3985aadae9c042b89d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5310000acb9c7cbe5059db783fd311e19c3ec6017b83349afaeaf09c7ea792?apiKey=a45cd760213d4a3985aadae9c042b89d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5310000acb9c7cbe5059db783fd311e19c3ec6017b83349afaeaf09c7ea792?apiKey=a45cd760213d4a3985aadae9c042b89d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5310000acb9c7cbe5059db783fd311e19c3ec6017b83349afaeaf09c7ea792?apiKey=a45cd760213d4a3985aadae9c042b89d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5310000acb9c7cbe5059db783fd311e19c3ec6017b83349afaeaf09c7ea792?apiKey=a45cd760213d4a3985aadae9c042b89d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5310000acb9c7cbe5059db783fd311e19c3ec6017b83349afaeaf09c7ea792?apiKey=a45cd760213d4a3985aadae9c042b89d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5310000acb9c7cbe5059db783fd311e19c3ec6017b83349afaeaf09c7ea792?apiKey=a45cd760213d4a3985aadae9c042b89d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e5310000acb9c7cbe5059db783fd311e19c3ec6017b83349afaeaf09c7ea792?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                      css={{
                        aspectRatio: "1",
                        objectFit: "auto",
                        objectPosition: "center",
                        width: "200px",
                        maxWidth: "100%",
                        alignSelf: "stretch",
                        margin: "auto 0",
                        "@media (max-width: 991px)": {
                          marginTop: "40px",
                        },
                      }}
                    />
                  </div>
                  <div product details
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "normal",
                      width: "50%",
                      marginLeft: "20px",
                      "@media (max-width: 991px)": {
                        width: "100%",
                        marginLeft: 0,
                      },
                    }}
                  >
                    <div product details container
                      css={{
                        display: "flex",
                        flexGrow: "1",
                        flexDirection: "column",
                        "@media (max-width: 991px)": {
                          marginTop: "40px",
                        },
                      }}
                    >
                      <div products title
                        css={{
                          color: "#474747",
                          font: "700 20px Almarai, sans-serif ",
                        }}
                      >
                        Sweetest® Mango
                      </div>
                      <div product description
                        css={{
                          color: "#474747",
                          marginTop: "21px",
                          font: "400 16px Almarai, sans-serif ",
                        }}
                      >
                        It’s mango season again... who doesn’t love that!
                      </div>
                      <div product availability
                        css={{
                          borderRadius: "10px",
                          boxShadow:
                            "5px 5px 20px 0px rgba(255, 210, 178, 0.50)",
                          borderColor: "rgba(255, 148, 70, 0.5)",
                          borderStyle: "solid",
                          borderWidth: "1px",
                          backgroundColor: "rgba(255, 147, 69, 0.80)",
                          marginTop: "101px",
                          color: "#FFF",
                          justifyContent: "center",
                          padding: "6px 19px",
                          font: "700 14px Almarai, sans-serif ",
                          "@media (max-width: 991px)": {
                            paddingRight: "20px",
                            marginTop: "40px",
                          },
                        }}
                      >
                        <span style="font-weight: 400;">Only</span> 5{" "}
                        <span style="font-weight: 400;">left</span>
                      </div>
                      <div flex container
                        css={{
                          display: "flex",
                          marginTop: "47px",
                          width: "100%",
                          gap: "20px",
                          justifyContent: "space-between",
                          "@media (max-width: 991px)": {
                            marginTop: "40px",
                          },
                        }}
                      >
                        <div product price
                          css={{
                            color: "#474747",
                            font: "700 20px Almarai, sans-serif ",
                          }}
                        >
                          85p
                        </div>
                        <div product icons
                          css={{
                            display: "flex",
                            alignItems: "start",
                            gap: "20px",
                            justifyContent: "space-between",
                          }}
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13e764764effea848431ac197dba4b41a00bf7a3c48085922ad63302ba0bf1c0?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                            css={{
                              aspectRatio: "1.04",
                              objectFit: "auto",
                              objectPosition: "center",
                              width: "28px",
                            }}
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1bd4abc6185721c0a9d115ef837579ca06f0f3e8d56d76c0dad4595e7de8783?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                            css={{
                              aspectRatio: "1.19",
                              objectFit: "auto",
                              objectPosition: "center",
                              width: "32px",
                              fill: "#979797",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal",
                width: "50%",
                marginLeft: "20px",
                "@media (max-width: 991px)": {
                  width: "100%",
                  marginLeft: 0,
                },
              }}
            >
              <div
                css={{
                  display: "flex",
                  flexGrow: "1",
                  flexDirection: "column",
                  justifyContent: "center",
                  "@media (max-width: 991px)": {
                    maxWidth: "100%",
                    marginTop: "40px",
                  },
                }}
              >
                <div
                  css={{
                    borderRadius: "30px",
                    boxShadow: "5px 5px 20px 0px rgba(133, 133, 133, 0.20)",
                    backgroundColor: "#FFF",
                    padding: "22px 25px 5px 0",
                    "@media (max-width: 991px)": {
                      maxWidth: "100%",
                      paddingRight: "20px",
                    },
                  }}
                >
                  <div
                    css={{
                      gap: "20px",
                      display: "flex",
                      "@media (max-width: 991px)": {
                        flexDirection: "column",
                        alignItems: "stretch",
                        gap: "0px",
                      },
                    }}
                  >
                    <div
                      css={{
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "normal",
                        width: "62%",
                        marginLeft: "0px",
                        "@media (max-width: 991px)": {
                          width: "100%",
                          marginLeft: 0,
                        },
                      }}
                    >
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4db26a64c5f52a122db75224bc1af28fad90382579c71f1c288f1f0ec3ad13bf?apiKey=a45cd760213d4a3985aadae9c042b89d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db26a64c5f52a122db75224bc1af28fad90382579c71f1c288f1f0ec3ad13bf?apiKey=a45cd760213d4a3985aadae9c042b89d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db26a64c5f52a122db75224bc1af28fad90382579c71f1c288f1f0ec3ad13bf?apiKey=a45cd760213d4a3985aadae9c042b89d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db26a64c5f52a122db75224bc1af28fad90382579c71f1c288f1f0ec3ad13bf?apiKey=a45cd760213d4a3985aadae9c042b89d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db26a64c5f52a122db75224bc1af28fad90382579c71f1c288f1f0ec3ad13bf?apiKey=a45cd760213d4a3985aadae9c042b89d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db26a64c5f52a122db75224bc1af28fad90382579c71f1c288f1f0ec3ad13bf?apiKey=a45cd760213d4a3985aadae9c042b89d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db26a64c5f52a122db75224bc1af28fad90382579c71f1c288f1f0ec3ad13bf?apiKey=a45cd760213d4a3985aadae9c042b89d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db26a64c5f52a122db75224bc1af28fad90382579c71f1c288f1f0ec3ad13bf?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                        css={{
                          aspectRatio: "1",
                          objectFit: "auto",
                          objectPosition: "center",
                          width: "100%",
                          "@media (max-width: 991px)": {
                            marginTop: "29px",
                          },
                        }}
                      />
                    </div>
                    <div
                      css={{
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "normal",
                        width: "38%",
                        marginLeft: "20px",
                        "@media (max-width: 991px)": {
                          width: "100%",
                          marginLeft: 0,
                        },
                      }}
                    >
                      <div
                        css={{
                          display: "flex",
                          flexDirection: "column",
                          alignSelf: "stretch",
                          margin: "auto 0",
                          "@media (max-width: 991px)": {
                            marginTop: "40px",
                          },
                        }}
                      >
                        <div
                          css={{
                            color: "#474747",
                            font: "700 20px Almarai, sans-serif ",
                          }}
                        >
                          Seedless Grapes
                        </div>
                        <div
                          css={{
                            color: "#474747",
                            marginTop: "20px",
                            font: "400 16px Almarai, sans-serif ",
                          }}
                        >
                          Yummy brand seedless grapes 900g
                        </div>
                        <div
                          css={{
                            borderRadius: "10px",
                            boxShadow:
                              "5px 5px 20px 0px rgba(196, 255, 202, 0.50)",
                            borderColor: "rgba(0, 202, 20, 0.5)",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            backgroundColor: "rgba(0, 167, 17, 0.50)",
                            marginTop: "98px",
                            color: "#FFF",
                            whiteSpace: "nowrap",
                            justifyContent: "center",
                            padding: "7px 21px",
                            font: "400 14px Almarai, sans-serif ",
                            "@media (max-width: 991px)": {
                              marginTop: "40px",
                              whiteSpace: "initial",
                              padding: "0 20px",
                            },
                          }}
                        >
                          Available
                        </div>
                        <div
                          css={{
                            display: "flex",
                            marginTop: "47px",
                            width: "100%",
                            gap: "20px",
                            justifyContent: "space-between",
                            "@media (max-width: 991px)": {
                              marginTop: "40px",
                            },
                          }}
                        >
                          <div
                            css={{
                              color: "#474747",
                              margin: "auto 0",
                              font: "700 20px Almarai, sans-serif ",
                            }}
                          >
                            £3.75
                          </div>
                          <div
                            css={{
                              display: "flex",
                              alignItems: "start",
                              gap: "19px",
                            }}
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13e764764effea848431ac197dba4b41a00bf7a3c48085922ad63302ba0bf1c0?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                              css={{
                                aspectRatio: "1.04",
                                objectFit: "auto",
                                objectPosition: "center",
                                width: "28px",
                              }}
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef57d74cfed954885e52934d68a3e51ea2fafa7d733caa37514a21dc998a0f8e?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                              css={{
                                aspectRatio: "1.19",
                                objectFit: "auto",
                                objectPosition: "center",
                                width: "32px",
                                fill: "#E86F6F",
                                strokeWidth: "1px",
                                stroke: "rgba(255, 129, 129, 0.50)",
                                filter:
                                  "drop-shadow(2px 2px 10px rgba(255, 138, 138, 0.20))",
                                borderColor: "rgba(255, 129, 129, 0.5)",
                                borderStyle: "solid",
                                borderWidth: "1px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          css={{
            marginTop: "94px",
            "@media (max-width: 991px)": {
              maxWidth: "100%",
              marginTop: "40px",
            },
          }}
        >
          <div
            css={{
              gap: "20px",
              display: "flex",
              "@media (max-width: 991px)": {
                flexDirection: "column",
                alignItems: "stretch",
                gap: "0px",
              },
            }}
          >
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal",
                width: "50%",
                marginLeft: "0px",
                "@media (max-width: 991px)": {
                  width: "100%",
                  marginLeft: 0,
                },
              }}
            >
              <div
                css={{
                  borderRadius: "30px",
                  boxShadow: "5px 5px 20px 0px rgba(133, 133, 133, 0.20)",
                  backgroundColor: "#FFF",
                  flexGrow: "1",
                  width: "100%",
                  padding: "34px 34px 0",
                  "@media (max-width: 991px)": {
                    maxWidth: "100%",
                    marginTop: "40px",
                    padding: "0 20px",
                  },
                }}
              >
                <div
                  css={{
                    gap: "20px",
                    display: "flex",
                    "@media (max-width: 991px)": {
                      flexDirection: "column",
                      alignItems: "stretch",
                      gap: "0px",
                    },
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "normal",
                      width: "50%",
                      marginLeft: "0px",
                      "@media (max-width: 991px)": {
                        width: "100%",
                        marginLeft: 0,
                      },
                    }}
                  >
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e006c18a447dabad998fb8381924584a9a924ad9ecc2c362aff7218923b4e163?apiKey=a45cd760213d4a3985aadae9c042b89d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e006c18a447dabad998fb8381924584a9a924ad9ecc2c362aff7218923b4e163?apiKey=a45cd760213d4a3985aadae9c042b89d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e006c18a447dabad998fb8381924584a9a924ad9ecc2c362aff7218923b4e163?apiKey=a45cd760213d4a3985aadae9c042b89d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e006c18a447dabad998fb8381924584a9a924ad9ecc2c362aff7218923b4e163?apiKey=a45cd760213d4a3985aadae9c042b89d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e006c18a447dabad998fb8381924584a9a924ad9ecc2c362aff7218923b4e163?apiKey=a45cd760213d4a3985aadae9c042b89d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e006c18a447dabad998fb8381924584a9a924ad9ecc2c362aff7218923b4e163?apiKey=a45cd760213d4a3985aadae9c042b89d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e006c18a447dabad998fb8381924584a9a924ad9ecc2c362aff7218923b4e163?apiKey=a45cd760213d4a3985aadae9c042b89d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e006c18a447dabad998fb8381924584a9a924ad9ecc2c362aff7218923b4e163?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                      css={{
                        aspectRatio: "1",
                        objectFit: "auto",
                        objectPosition: "center",
                        width: "200px",
                        marginTop: "30px",
                        maxWidth: "100%",
                        "@media (max-width: 991px)": {
                          marginTop: "40px",
                        },
                      }}
                    />
                  </div>
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "normal",
                      width: "50%",
                      marginLeft: "20px",
                      "@media (max-width: 991px)": {
                        width: "100%",
                        marginLeft: 0,
                      },
                    }}
                  >
                    <div
                      css={{
                        display: "flex",
                        flexGrow: "1",
                        flexDirection: "column",
                        "@media (max-width: 991px)": {
                          marginTop: "40px",
                        },
                      }}
                    >
                      <div
                        css={{
                          color: "#474747",
                          font: "700 20px Almarai, sans-serif ",
                        }}
                      >
                        Juicy Figs
                      </div>
                      <div
                        css={{
                          color: "#474747",
                          marginTop: "21px",
                          font: "400 16px Almarai, sans-serif ",
                        }}
                      >
                        Best figs for cooking 140g
                      </div>
                      <div
                        css={{
                          borderRadius: "10px",
                          boxShadow:
                            "5px 5px 20px 0px rgba(196, 255, 202, 0.50)",
                          borderColor: "rgba(0, 202, 20, 0.5)",
                          borderStyle: "solid",
                          borderWidth: "1px",
                          backgroundColor: "rgba(0, 167, 17, 0.50)",
                          marginTop: "114px",
                          color: "#FFF",
                          whiteSpace: "nowrap",
                          justifyContent: "center",
                          padding: "7px 21px",
                          font: "400 14px Almarai, sans-serif ",
                          "@media (max-width: 991px)": {
                            marginTop: "40px",
                            whiteSpace: "initial",
                            padding: "0 20px",
                          },
                        }}
                      >
                        Available
                      </div>
                      <div
                        css={{
                          display: "flex",
                          marginTop: "47px",
                          width: "100%",
                          gap: "20px",
                          justifyContent: "space-between",
                          "@media (max-width: 991px)": {
                            marginTop: "40px",
                          },
                        }}
                      >
                        <div
                          css={{
                            color: "#474747",
                            font: "700 20px Almarai, sans-serif ",
                          }}
                        >
                          £2.00
                        </div>
                        <div
                          css={{
                            display: "flex",
                            gap: "19px",
                          }}
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fc005f1f59372da607ccfaa9b37234c324c3cc9b81bf16667ed63ef5a3885b0?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                            css={{
                              aspectRatio: "2.17",
                              objectFit: "auto",
                              objectPosition: "center",
                              width: "28px",
                            }}
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fb00e6253db0929dd8ded25537dfbdca10662ba9c87f8c8df737a54a79cc721?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                            css={{
                              aspectRatio: "2.44",
                              objectFit: "auto",
                              objectPosition: "center",
                              width: "32px",
                              fill: "#979797",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal",
                width: "50%",
                marginLeft: "20px",
                "@media (max-width: 991px)": {
                  width: "100%",
                  marginLeft: 0,
                },
              }}
            >
              <div
                css={{
                  borderRadius: "30px",
                  boxShadow: "5px 5px 20px 0px rgba(133, 133, 133, 0.20)",
                  backgroundColor: "#FFF",
                  flexGrow: "1",
                  width: "100%",
                  padding: "33px 34px 0",
                  "@media (max-width: 991px)": {
                    maxWidth: "100%",
                    marginTop: "40px",
                    padding: "0 20px",
                  },
                }}
              >
                <div
                  css={{
                    gap: "20px",
                    display: "flex",
                    "@media (max-width: 991px)": {
                      flexDirection: "column",
                      alignItems: "stretch",
                      gap: "0px",
                    },
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "normal",
                      width: "50%",
                      marginLeft: "0px",
                      "@media (max-width: 991px)": {
                        width: "100%",
                        marginLeft: 0,
                      },
                    }}
                  >
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a6ee0db8c131667c9c23e7b78d4db69a9cc56e45ee874e83770b5e4b92f6edd4?apiKey=a45cd760213d4a3985aadae9c042b89d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ee0db8c131667c9c23e7b78d4db69a9cc56e45ee874e83770b5e4b92f6edd4?apiKey=a45cd760213d4a3985aadae9c042b89d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ee0db8c131667c9c23e7b78d4db69a9cc56e45ee874e83770b5e4b92f6edd4?apiKey=a45cd760213d4a3985aadae9c042b89d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ee0db8c131667c9c23e7b78d4db69a9cc56e45ee874e83770b5e4b92f6edd4?apiKey=a45cd760213d4a3985aadae9c042b89d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ee0db8c131667c9c23e7b78d4db69a9cc56e45ee874e83770b5e4b92f6edd4?apiKey=a45cd760213d4a3985aadae9c042b89d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ee0db8c131667c9c23e7b78d4db69a9cc56e45ee874e83770b5e4b92f6edd4?apiKey=a45cd760213d4a3985aadae9c042b89d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ee0db8c131667c9c23e7b78d4db69a9cc56e45ee874e83770b5e4b92f6edd4?apiKey=a45cd760213d4a3985aadae9c042b89d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6ee0db8c131667c9c23e7b78d4db69a9cc56e45ee874e83770b5e4b92f6edd4?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                      css={{
                        aspectRatio: "1",
                        objectFit: "auto",
                        objectPosition: "center",
                        width: "200px",
                        marginTop: "28px",
                        maxWidth: "100%",
                        "@media (max-width: 991px)": {
                          marginTop: "40px",
                        },
                      }}
                    />
                  </div>
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "normal",
                      width: "50%",
                      marginLeft: "20px",
                      "@media (max-width: 991px)": {
                        width: "100%",
                        marginLeft: 0,
                      },
                    }}
                  >
                    <div
                      css={{
                        display: "flex",
                        flexGrow: "1",
                        flexDirection: "column",
                        "@media (max-width: 991px)": {
                          marginTop: "40px",
                        },
                      }}
                    >
                      <div
                        css={{
                          color: "#474747",
                          font: "700 20px Almarai, sans-serif ",
                        }}
                      >
                        Pomegranate{" "}
                      </div>
                      <div
                        css={{
                          color: "#474747",
                          marginTop: "20px",
                          font: "400 16px Almarai, sans-serif ",
                        }}
                      >
                        Imported directly from important places
                      </div>
                      <div
                        css={{
                          borderRadius: "10px",
                          boxShadow:
                            "5px 5px 20px 0px rgba(196, 255, 202, 0.50)",
                          borderColor: "rgba(0, 202, 20, 0.5)",
                          borderStyle: "solid",
                          borderWidth: "1px",
                          backgroundColor: "rgba(0, 167, 17, 0.50)",
                          marginTop: "98px",
                          color: "#FFF",
                          whiteSpace: "nowrap",
                          justifyContent: "center",
                          padding: "7px 21px",
                          font: "400 14px Almarai, sans-serif ",
                          "@media (max-width: 991px)": {
                            marginTop: "40px",
                            whiteSpace: "initial",
                            padding: "0 20px",
                          },
                        }}
                      >
                        Available
                      </div>
                      <div
                        css={{
                          display: "flex",
                          marginTop: "47px",
                          width: "100%",
                          gap: "20px",
                          justifyContent: "space-between",
                          padding: "0 1px",
                          "@media (max-width: 991px)": {
                            marginTop: "40px",
                          },
                        }}
                      >
                        <div
                          css={{
                            color: "#474747",
                            font: "700 20px Almarai, sans-serif ",
                          }}
                        >
                          £1.25
                        </div>
                        <div
                          css={{
                            display: "flex",
                            gap: "16px",
                          }}
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91a500b790e3685c55c9771113e3c13b8e59bd596b7360518fdb75d62757e180?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                            css={{
                              aspectRatio: "2.33",
                              objectFit: "auto",
                              objectPosition: "center",
                              width: "28px",
                              alignSelf: "start",
                            }}
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fb00e6253db0929dd8ded25537dfbdca10662ba9c87f8c8df737a54a79cc721?apiKey=a45cd760213d4a3985aadae9c042b89d&"
                            css={{
                              aspectRatio: "2.44",
                              objectFit: "auto",
                              objectPosition: "center",
                              width: "32px",
                              fill: "#979797",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

