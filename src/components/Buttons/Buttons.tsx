// // components/ui/Buttons.tsx
// import React from "react"
// import {
//   Box,
//   Button,
//   Flex,
//   IconButton,
//   MenuContent,
//   MenuRadioItem,
//   MenuRadioItemGroup,
//   MenuRoot,
//   MenuTrigger,
//   Text,
// } from "@chakra-ui/react"

// // Кнопка с обычным стилем
// export const PrimaryButton = ({ children, ...props }: any) => (
//   <Button colorPalette="teal" size="md" {...props}>
//     {children}
//   </Button>
// )

// // Кнопка с вариантами
// export const SecondaryButton = ({ children, ...props }: any) => (
//   <Button variant="outline" colorPalette="blue" size="md" {...props}>
//     {children}
//   </Button>
// )

// // Кнопка с красным фоном
// export const DangerButton = ({ children, ...props }: any) => (
//   <Button colorPalette="red" size="md" {...props}>
//     {children}
//   </Button>
// )

// // Кнопка с большим размером
// export const LargeButton = ({ children, ...props }: any) => (
//   <Button size="lg" colorPalette="purple" {...props}>
//     {children}
//   </Button>
// )

// // Кнопка переключение темы
// export const ToggleTheme = ({ children, ...props }: any) => (
//   <Box position="relative">
//     <MenuRoot>
//       <MenuTrigger asChild>
//         <Button
//           aria-label="Toggle Theme"
//           variant="subtle"
//           size="lg"
//           bg={background}
//           transition={"0.6s"}
//           _hover={{
//             bg: switchColor,
//           }}
//         >
//           {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
//         </Button>
//       </MenuTrigger>
//       <MenuContent
//         minW="10rem"
//         position="absolute"
//         top="110%"
//         left="0"
//         zIndex="10"
//         bg={background}
//         boxShadow="md"
//         borderRadius="md"
//         border="1px solid"
//         borderColor={switchColor}
//       >
//         <MenuRadioItemGroup value={colorMode} onValueChange={toggleColorMode}>
//           <MenuRadioItem
//             _hover={{
//               bg: switchColor,
//             }}
//             value="light"
//           >
//             <MdLightMode /> {t("main.theme.light")}
//           </MenuRadioItem>
//           <MenuRadioItem
//             _hover={{
//               bg: switchColor,
//             }}
//             value="dark"
//           >
//             <MdDarkMode /> {t("main.theme.dark")}
//           </MenuRadioItem>
//         </MenuRadioItemGroup>
//       </MenuContent>
//     </MenuRoot>
//   </Box>
// )
