import { funcionOrdenadoaZ, funcionOrdenadozA, filterGender, filterOrigen } from '../src/data.js';

const mockdata = [
  {
    "name": "Summer Smith",
    "gender": "Female",
    "origin": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    }

  },
  {

    "name": "Rick Sanchez",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    }
  },
  {

    "name": "Morty Smith",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    }

  }
];

const mockdataOrdenadaaZ =
  [
    {

      "name": "Morty Smith",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      }

    },
    {

      "name": "Rick Sanchez",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      }
    },

    {
      "name": "Summer Smith",
      "gender": "Female",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      }

    }];

const mockdataOrdenadazA =
  [
    {
      "name": "Summer Smith",
      "gender": "Female",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      }

    },
    {

      "name": "Rick Sanchez",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      }
    },
    {

      "name": "Morty Smith",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      }
    },
  ];

describe('funcionOrdenadoaZ', () => {
  it('is a function', () => {
    expect(typeof funcionOrdenadoaZ).toBe('function');
  });

  it('returns mockdataOrdenadaaZ', () => {
    expect(funcionOrdenadoaZ(mockdata)).toStrictEqual(mockdataOrdenadaaZ);

  });
});

describe('funcionOrdenadozA', () => {
  it('is a function', () => {
    expect(typeof funcionOrdenadozA).toBe('function');
  });

  it('returns mockdataOrdenadazA', () => {
    expect(funcionOrdenadozA(mockdata)).toStrictEqual(mockdataOrdenadazA);
  });
});

describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('returns', () => {
    expect(filterGender(mockdata, "Female")).toStrictEqual([{
      "name": "Summer Smith",
      "gender": "Female",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      }

    }])

  });
});

describe('filterOrigen', () => {
  it('is a function', () => {
    expect(typeof filterOrigen).toBe('function');
  });
  const mockdataflatmap = mockdata.flatMap(origen => origen.origin)
  it('returns', () => {
    expect(filterOrigen(mockdataflatmap, "Earth (C-137)")).toStrictEqual([
      {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      }])

  });
});




