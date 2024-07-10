export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'CheckBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'Compound' : IDL.Func([], [], ['oneway']),
    'Withdraw' : IDL.Func([IDL.Float64], [], ['oneway']),
    'topUp' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
