import indicator, { OrdinalPrefix } from './indicator'
export { indicator, OrdinalPrefix }

export default function ordinal <I extends number>(i: I): `${I}${OrdinalPrefix}`
