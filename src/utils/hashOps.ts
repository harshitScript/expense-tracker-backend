import bcrypt from "bcrypt";

export function generateHash(text: string, saltRounds: number): string | undefined {
    try {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(text, salt);
        return hash
    } catch {
        return undefined
    }
}

export function compareHash(text: string, hash: string): boolean {
    try {
        const result = bcrypt.compareSync(text, hash);
        return result;
    } catch {
        return false
    }
}
