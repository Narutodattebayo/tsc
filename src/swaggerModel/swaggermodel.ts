import { ApiModel, ApiModelProperty,SwaggerDefinitionConstant } from "swagger-express-ts"

@ApiModel({
    description: "User description",
    name: "ReqAddUser"
})
export class ReqAddUserModel {

    @ApiModelProperty({
        description: "Usermodel",
        required: true,
        type: SwaggerDefinitionConstant.STRING,
        example: 'anil.yadav' as any
    })
    email: String


}



