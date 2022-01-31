"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\n\n/*#__PURE__*/ \n\n\n\nfunction Titulo(props) {\n    const Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"b3c1a8341da1d1b\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\marjo\\\\OneDrive\\\\Documentos\\\\Estudos\\\\Alura\\\\Estudos\\\\chatcorde\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b3c1a8341da1d1b\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]};\nfont-size:24px;\nfont-weight:600}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n/*function HomePage() {\r\n    return (\r\n        <div>\r\n            {<GlobalStyle />}\r\n            <Titulo tag='h2'>Seja bem-vindo!</Titulo> \r\n            <h2>O discord - ChatCorde </h2>\r\n            \r\n        </div>\r\n    )\r\n  }*/ //export default HomePage\nfunction PaginaInicial() {\n    //const username = \"MarjoryMatos\";\n    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('MarjoryMatos');\n    const roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                backgroundImage: \"url(https://i.pinimg.com/originals/28/54/ca/2854cad05935079810d40898f281c148.png)\",\n                //\"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n                backgroundRepeat: \"no-repeat\",\n                backgroundSize: \"cover\",\n                backgroundBlendMode: \"multiply\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"space-between\",\n                    flexDirection: {\n                        xs: \"column\",\n                        sm: \"row\"\n                    },\n                    width: \"100%\",\n                    maxWidth: \"700px\",\n                    borderRadius: \"5px\",\n                    padding: \"32px\",\n                    margin: \"16px\",\n                    boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[700]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        onSubmit: function(infosDoEvento) {\n                            infosDoEvento.preventDefault();\n                            console.log('houve');\n                            roteamento.push(`/chat?username=${username}`);\n                        //window.location.href = '/chat';\n                        },\n                        styleSheet: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\",\n                            width: {\n                                xs: \"100%\",\n                                sm: \"50%\"\n                            },\n                            textAlign: \"center\",\n                            marginBottom: \"32px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                tag: \"h2\",\n                                children: \"Seja bem-vindo!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\marjo\\\\OneDrive\\\\Documentos\\\\Estudos\\\\Alura\\\\Estudos\\\\chatcorde\\\\pages\\\\index.js\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: \"32px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_5__.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\marjo\\\\OneDrive\\\\Documentos\\\\Estudos\\\\Alura\\\\Estudos\\\\chatcorde\\\\pages\\\\index.js\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: username,\n                                onChange: function(event) {\n                                    console.log('usu\\xe1rio digitou', event.target.value);\n                                    //onde está o valor?\n                                    const valor = event.target.value;\n                                    //trocar o valor da variável\n                                    setUsername(valor);\n                                },\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\marjo\\\\OneDrive\\\\Documentos\\\\Estudos\\\\Alura\\\\Estudos\\\\chatcorde\\\\pages\\\\index.js\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[600]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\marjo\\\\OneDrive\\\\Documentos\\\\Estudos\\\\Alura\\\\Estudos\\\\chatcorde\\\\pages\\\\index.js\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\marjo\\\\OneDrive\\\\Documentos\\\\Estudos\\\\Alura\\\\Estudos\\\\chatcorde\\\\pages\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            maxWidth: \"200px\",\n                            padding: \"16px\",\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800],\n                            border: \"1px solid\",\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[999],\n                            borderRadius: \"10px\",\n                            flex: 1,\n                            minHeight: \"240px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: \"50%\",\n                                    marginBottom: \"16px\"\n                                },\n                                src: `https://github.com/${username}.png`\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\marjo\\\\OneDrive\\\\Documentos\\\\Estudos\\\\Alura\\\\Estudos\\\\chatcorde\\\\pages\\\\index.js\",\n                                lineNumber: 171,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                    padding: \"3px 10px\",\n                                    borderRadius: \"1000px\"\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\marjo\\\\OneDrive\\\\Documentos\\\\Estudos\\\\Alura\\\\Estudos\\\\chatcorde\\\\pages\\\\index.js\",\n                                lineNumber: 178,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\marjo\\\\OneDrive\\\\Documentos\\\\Estudos\\\\Alura\\\\Estudos\\\\chatcorde\\\\pages\\\\index.js\",\n                        lineNumber: 156,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\marjo\\\\OneDrive\\\\Documentos\\\\Estudos\\\\Alura\\\\Estudos\\\\chatcorde\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\marjo\\\\OneDrive\\\\Documentos\\\\Estudos\\\\Alura\\\\Estudos\\\\chatcorde\\\\pages\\\\index.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUMsQ0FBUTtnQ0FDYkMsS0FBSztnQ0FDTFA7Z0NBQ0FRLFlBQVksRUFBRSxDQUFDO29DQUNiQyxhQUFhLEVBQUUzRCxTQUFTLENBQUNLLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBSztvQ0FDcEQrQyxTQUFTLEVBQUV0RDtvQ0FDWDREO29DQUNBQztnQ0FDRixDQUFDOzs7Ozs7Ozs7Ozs7MENBTUpwRSxHQUFHO3dCQUNGcUIsVUFBVSxFQUFFLENBQUM7NEJBQ1hDLE9BQU87OzRCQUVQQyxVQUFVOzRCQUNWWSxRQUFRLEVBQUUsQ0FBTzs0QkFDakJFLE9BQU8sRUFBRSxDQUFNOzRCQUNmWjs0QkFDQTRDOzRCQUNBQyxNQUFBQSw2REFBYS9ELENBQUFBLHFEQUFBQTs0QkFDYjZCOzRCQUNBbUMsSUFBSSxFQUFFLENBQUM7NEJBQ1BDLFNBQVMsRUFBRSxDQUFPO3dCQUNwQixDQUFDOzs7Z0NBR0NuRCxVQUFVLEVBQUUsQ0FBQztvQ0FDWGUsWUFBWTtvQ0FDWlksS0FBQUEsb0VBQW9CO2dDQUN0QixDQUFDO2dDQUNEeUIsR0FBRzs7Ozs7O2tEQUVKdkUsSUFBSTtnQ0FDSCtDLE9BQU8sRUFBQyxDQUFPO2dDQUNmNUI7b0NBQ0U2QixLQUFLLEVBQUUzQyxTQUFTLENBQUNLLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQztvQ0FDOUJXO29DQUNBWSxPQUFPLEVBQUUsQ0FBVTtvQ0FDbkJELFlBQVk7Z0NBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Y29yZGUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlIH0gZnJvbSBcIkBza3luZXh1aS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFRpdHVsbyhwcm9wcykge1xyXG4gIFxyXG4gIGNvbnN0IFRhZyA9IHByb3BzLnRhZyB8fCAnaDEnO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICR7VGFnfSB7XHJcbiAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdfTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG4vKmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7PEdsb2JhbFN0eWxlIC8+fVxyXG4gICAgICAgICAgICA8VGl0dWxvIHRhZz0naDInPlNlamEgYmVtLXZpbmRvITwvVGl0dWxvPiBcclxuICAgICAgICAgICAgPGgyPk8gZGlzY29yZCAtIENoYXRDb3JkZSA8L2gyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9Ki9cclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUluaWNpYWwoKSB7XHJcbiAgLy9jb25zdCB1c2VybmFtZSA9IFwiTWFyam9yeU1hdG9zXCI7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZSgnTWFyam9yeU1hdG9zJyk7XHJcbiAgY29uc3Qgcm90ZWFtZW50byA9IHVzZVJvdXRlciAoKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgIFwidXJsKGh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy8yOC81NC9jYS8yODU0Y2FkMDU5MzUwNzk4MTBkNDA4OThmMjgxYzE0OC5wbmcpXCIsXHJcbiAgICAgICAgICAgIC8vXCJ1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgIGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgeHM6IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgc206IFwicm93XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiNzAwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjMycHhcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXtmdW5jdGlvbiAoaW5mb3NEb0V2ZW50byl7XHJcbiAgICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdob3V2ZScpO1xyXG4gICAgICAgICAgICAgIHJvdGVhbWVudG8ucHVzaChgL2NoYXQ/dXNlcm5hbWU9JHt1c2VybmFtZX1gKTtcclxuICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9jaGF0JztcclxuICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6IFwiMTAwJVwiLCBzbTogXCI1MCVcIiB9LFxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzJweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGl0dWxvIHRhZz1cImgyXCI+U2VqYSBiZW0tdmluZG8hPC9UaXR1bG8+XHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkzXCJcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzJweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2FwcENvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgICAgICB7Lyo8aW5wdXQgXHJcbiAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmdW5jdGlvbiAoZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzdcOhcmlvIGRpZ2l0b3UnLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgLy9vbmRlIGVzdMOhIG8gdmFsb3I/XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vdHJvY2FyIG8gdmFsb3IgZGEgdmFyacOhdmVsXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWxvcik7XHJcblxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+ICovfSBcclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c3XDoXJpbyBkaWdpdG91JywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIC8vb25kZSBlc3TDoSBvIHZhbG9yP1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvL3Ryb2NhciBvIHZhbG9yIGRhIHZhcmnDoXZlbFxyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodmFsb3IpO1xyXG5cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIHRleHRGaWVsZENvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgbmV1dHJhbDoge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvckhpZ2hsaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbnRyYXJcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIGJ1dHRvbkNvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3JMaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzQwMF0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuXHJcbiAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBtYXhXaWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMjQwcHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5NFwiXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMDBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJhcHBDb25maWciLCJUaXR1bG8iLCJwcm9wcyIsIlRhZyIsInRhZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlU3RhdGUiLCJyb3RlYW1lbnRvIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImZsZXhEaXJlY3Rpb24iLCJ4cyIsInNtIiwid2lkdGgiLCJtYXhXaWR0aCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJhcyIsIm9uU3VibWl0IiwiaW5mb3NEb0V2ZW50byIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3IiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsb3IiLCJmdWxsV2lkdGgiLCJ0ZXh0RmllbGRDb2xvcnMiLCJuZXV0cmFsIiwidGV4dENvbG9yIiwibWFpbkNvbG9yIiwibWFpbkNvbG9ySGlnaGxpZ2h0IiwidHlwZSIsImxhYmVsIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwibWluSGVpZ2h0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ChatCode - Akatsuki  ","stickers":["http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"],"theme":{"colors":{"primary":{"100":"#C1EAC5","200":"#A3D9A5","300":"#7BC47F","400":"#57AE5B","500":"red","600":"#2F8132","700":"#207227","800":"#0E5814","900":"#05400A","050":"#E3F9E5"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"}}}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();