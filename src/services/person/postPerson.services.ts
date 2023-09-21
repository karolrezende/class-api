import { personRepository } from "../../data-source";
import { Person } from "../../entities/person.entities";
import { TpersonSchemaRequest, TpersonSchemaResponse } from "../../interfaces/person.interfaces";
import { personSchemaResponse } from "../../schemas/person.schemas";

export const postedPersonServices = async (personBody: TpersonSchemaRequest): Promise<TpersonSchemaResponse> =>{
    const createdBody: Person = personRepository.create(personBody)
    await personRepository.save(createdBody)

    const zoddedBody = personSchemaResponse.parse(createdBody)

    return zoddedBody
}