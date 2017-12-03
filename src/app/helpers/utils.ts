const varExtractor = new RegExp('return .+?\.(.+?);');

export function nameof<T>(param: (r: T) => any): string {
    const m = varExtractor.exec(param + '');

    if (m == null) {
        throw new Error('The function does not contain a statement matching \'return variableName;\'');
    }

    const fullMemberName = m[1];
    const memberParts = fullMemberName.split('.');
    return memberParts[memberParts.length - 1].trim();
}
