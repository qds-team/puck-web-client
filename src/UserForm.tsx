import {FormWrapper} from "./FormWrapper";

type UserData = {
    filePath: string
    password: string
}
type UserFormProps = UserData &{
    updateFields: (fields: Partial<UserData>) => void
}
export function UserForm({filePath, password, updateFields}: UserFormProps){

    return (
        <FormWrapper title="Login Information">
            <label>File Path</label>
            <input autoFocus
            required 
            type="text" 
            value={filePath}
            onChange={e => updateFields({filePath: e.target.value})}
            />

            <label>Password</label>
            <input required type="password" 
            value={password}
            onChange={e => updateFields({password: e.target.value})}
            />

        </FormWrapper>
    )
}