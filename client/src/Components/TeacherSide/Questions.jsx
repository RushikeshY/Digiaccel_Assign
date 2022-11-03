import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux1/action";

const Questions = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(getAll());
  }, []);
  console.log("Questions ~ questions", questions);

  return (
    <Flex direction="column" align={"start"} wrap={"wrap"}>
      {questions &&
        questions.map((elem, ind) => (
          <Box
            key={elem.id || elem._id}
            paddingBottom={"20px"}
            textAlign={"start"}
          >
            <Heading as="h6" size="xs" paddingBottom={"10px"}>
              Q{ind + 1}) . {elem.question}
            </Heading>

            <UnorderedList textAlign={"left"}>
              <ListItem>{elem.OptionA}</ListItem>
              <ListItem>{elem.OptionB}</ListItem>
              <ListItem>{elem.OptionC}</ListItem>
              <ListItem>{elem.OptionD}</ListItem>
              <ListItem fontWeight={"bold"}>
                Correct Answer{elem.correctAnswerOption}
              </ListItem>
            </UnorderedList>
            <Button colorScheme="teal" size="md">
              Edit
            </Button>
          </Box>
        ))}
    </Flex>
  );
};

export default Questions;
