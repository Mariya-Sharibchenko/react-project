import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Company = Node & {
  __typename?: 'Company';
  bookmarkedStudents: Array<Scalars['String']>;
  contacts: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CompanyInput = {
  bookmarkedStudents: Array<Scalars['String']>;
  contacts: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Contacts = {
  __typename?: 'Contacts';
  city: Scalars['String'];
  eMail: Scalars['String'];
  socialMedia?: Maybe<SocialMedia>;
  tel: Scalars['String'];
};

export type ContactsInput = {
  city: Scalars['String'];
  eMail: Scalars['String'];
  socialMedia?: InputMaybe<SocialMediaInput>;
  tel: Scalars['String'];
};

export type Education = {
  __typename?: 'Education';
  additional?: Maybe<Scalars['String']>;
  english: Scalars['String'];
  formal: FormalEducation;
};

export type EducationInput = {
  additional?: InputMaybe<Scalars['String']>;
  english: Scalars['String'];
  formal: FormalEducationInput;
};

export type FormalEducation = {
  __typename?: 'FormalEducation';
  detailedInfo: Scalars['String'];
  level: Scalars['String'];
};

export type FormalEducationInput = {
  detailedInfo: Scalars['String'];
  level: Scalars['String'];
};

export type Invitation = Node & {
  __typename?: 'Invitation';
  company: Company;
  id: Scalars['ID'];
  invitationDate: Scalars['String'];
  status: ResponseStatus;
  student: Student;
};

export type Mutation = {
  __typename?: 'Mutation';
  createInvitation: Invitation;
  updateCompany: Company;
  updateInvitation: Invitation;
  updateStudent: Student;
};


export type MutationCreateInvitationArgs = {
  company: CompanyInput;
  invitationDate: Scalars['String'];
  status: ResponseStatus;
  student: StudentInput;
};


export type MutationUpdateCompanyArgs = {
  bookmarkedStudents: Array<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationUpdateInvitationArgs = {
  id: Scalars['ID'];
  status: ResponseStatus;
};


export type MutationUpdateStudentArgs = {
  aboutStudent: UpdateStudentInfoInput;
  id: Scalars['ID'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  Company: Company;
  Student: Student;
  allCompanies: Array<Company>;
  allInvitations: Array<Invitation>;
  allStudents: Array<Student>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryStudentArgs = {
  id: Scalars['ID'];
};

export enum ResponseStatus {
  Accepted = 'accepted',
  Considering = 'considering',
  Rejected = 'rejected'
}

export type SocialMedia = {
  __typename?: 'SocialMedia';
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  vk?: Maybe<Scalars['String']>;
};

export type SocialMediaInput = {
  facebook?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  vk?: InputMaybe<Scalars['String']>;
};

export type Student = Node & {
  __typename?: 'Student';
  aboutStudent: Scalars['String'];
  bestStudentMark: Scalars['Boolean'];
  contacts: Contacts;
  course: Scalars['String'];
  diplomaLink: Scalars['String'];
  education: Education;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  img?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  position: Scalars['String'];
  schoolRecommendation: Scalars['String'];
  score: Scalars['Int'];
  showContacts: Scalars['Boolean'];
  skills: Array<Scalars['String']>;
};

export type StudentInput = {
  aboutStudent: Scalars['String'];
  bestStudentMark: Scalars['Boolean'];
  contacts: ContactsInput;
  course: Scalars['String'];
  diplomaLink: Scalars['String'];
  education: EducationInput;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  img?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  position: Scalars['String'];
  schoolRecommendation: Scalars['String'];
  score: Scalars['Int'];
  showContacts: Scalars['Boolean'];
  skills: Array<Scalars['String']>;
};

export type UpdateStudentInfoInput = {
  aboutStudent: Scalars['String'];
};

export type StudentFieldsFragment = { __typename?: 'Student', id: string, img?: string | null, firstName: string, lastName: string, position: string, course: string, skills: Array<string>, bestStudentMark: boolean, schoolRecommendation: string, score: number, diplomaLink: string, aboutStudent: string, showContacts: boolean, education: { __typename?: 'Education', english: string, additional?: string | null, formal: { __typename?: 'FormalEducation', level: string, detailedInfo: string } }, contacts: { __typename?: 'Contacts', city: string, tel: string, eMail: string, socialMedia?: { __typename?: 'SocialMedia', linkedin?: string | null } | null } };

export type UpdateBookmarkedStudentsMutationVariables = Exact<{
  companyId: Scalars['ID'];
  input: Array<Scalars['String']> | Scalars['String'];
}>;


export type UpdateBookmarkedStudentsMutation = { __typename?: 'Mutation', updateCompany: { __typename?: 'Company', bookmarkedStudents: Array<string> } };

export type AddNewInvitationMutationVariables = Exact<{
  company: CompanyInput;
  student: StudentInput;
  status: ResponseStatus;
  invitationDate: Scalars['String'];
}>;


export type AddNewInvitationMutation = { __typename?: 'Mutation', createInvitation: { __typename?: 'Invitation', id: string, status: ResponseStatus, invitationDate: string, company: { __typename?: 'Company', id: string }, student: { __typename?: 'Student', id: string } } };

export type UpdateInvitationMutationVariables = Exact<{
  id: Scalars['ID'];
  status: ResponseStatus;
}>;


export type UpdateInvitationMutation = { __typename?: 'Mutation', updateInvitation: { __typename?: 'Invitation', id: string, status: ResponseStatus, invitationDate: string, company: { __typename?: 'Company', id: string }, student: { __typename?: 'Student', id: string } } };

export type UpdateStudentInfoMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateStudentInfoInput;
}>;


export type UpdateStudentInfoMutation = { __typename?: 'Mutation', updateStudent: { __typename?: 'Student', id: string, firstName: string, aboutStudent: string } };

export type GetBookmarkedStudentsQueryVariables = Exact<{
  companyID: Scalars['ID'];
}>;


export type GetBookmarkedStudentsQuery = { __typename?: 'Query', Company: { __typename?: 'Company', bookmarkedStudents: Array<string> } };

export type GetAllInvitationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllInvitationsQuery = { __typename?: 'Query', allInvitations: Array<{ __typename?: 'Invitation', id: string, invitationDate: string, status: ResponseStatus, company: { __typename?: 'Company', id: string, name: string, contacts: string, bookmarkedStudents: Array<string> }, student: { __typename?: 'Student', id: string, img?: string | null, firstName: string, lastName: string, position: string, course: string, skills: Array<string>, bestStudentMark: boolean, schoolRecommendation: string, score: number, diplomaLink: string, aboutStudent: string, showContacts: boolean, education: { __typename?: 'Education', english: string, additional?: string | null, formal: { __typename?: 'FormalEducation', level: string, detailedInfo: string } }, contacts: { __typename?: 'Contacts', city: string, tel: string, eMail: string, socialMedia?: { __typename?: 'SocialMedia', linkedin?: string | null } | null } } }> };

export type GetAllStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStudentsQuery = { __typename?: 'Query', allStudents: Array<{ __typename?: 'Student', id: string, img?: string | null, firstName: string, lastName: string, position: string, course: string, skills: Array<string>, bestStudentMark: boolean, schoolRecommendation: string, score: number, diplomaLink: string, aboutStudent: string, showContacts: boolean, education: { __typename?: 'Education', english: string, additional?: string | null, formal: { __typename?: 'FormalEducation', level: string, detailedInfo: string } }, contacts: { __typename?: 'Contacts', city: string, tel: string, eMail: string, socialMedia?: { __typename?: 'SocialMedia', linkedin?: string | null } | null } }> };

export const StudentFieldsFragmentDoc = gql`
    fragment StudentFields on Student {
  id
  img
  firstName
  lastName
  position
  course
  skills
  bestStudentMark
  schoolRecommendation
  score
  diplomaLink
  aboutStudent
  education {
    english
    formal {
      level
      detailedInfo
    }
    additional
  }
  contacts {
    city
    tel
    eMail
    socialMedia {
      linkedin
    }
  }
  showContacts
}
    `;
export const UpdateBookmarkedStudentsDocument = gql`
    mutation updateBookmarkedStudents($companyId: ID!, $input: [String!]!) {
  updateCompany(id: $companyId, bookmarkedStudents: $input) {
    bookmarkedStudents
  }
}
    `;
export type UpdateBookmarkedStudentsMutationFn = Apollo.MutationFunction<UpdateBookmarkedStudentsMutation, UpdateBookmarkedStudentsMutationVariables>;

/**
 * __useUpdateBookmarkedStudentsMutation__
 *
 * To run a mutation, you first call `useUpdateBookmarkedStudentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookmarkedStudentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookmarkedStudentsMutation, { data, loading, error }] = useUpdateBookmarkedStudentsMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBookmarkedStudentsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBookmarkedStudentsMutation, UpdateBookmarkedStudentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBookmarkedStudentsMutation, UpdateBookmarkedStudentsMutationVariables>(UpdateBookmarkedStudentsDocument, options);
      }
export type UpdateBookmarkedStudentsMutationHookResult = ReturnType<typeof useUpdateBookmarkedStudentsMutation>;
export type UpdateBookmarkedStudentsMutationResult = Apollo.MutationResult<UpdateBookmarkedStudentsMutation>;
export type UpdateBookmarkedStudentsMutationOptions = Apollo.BaseMutationOptions<UpdateBookmarkedStudentsMutation, UpdateBookmarkedStudentsMutationVariables>;
export const AddNewInvitationDocument = gql`
    mutation addNewInvitation($company: CompanyInput!, $student: StudentInput!, $status: ResponseStatus!, $invitationDate: String!) {
  createInvitation(
    company: $company
    student: $student
    status: $status
    invitationDate: $invitationDate
  ) {
    id
    company {
      id
    }
    student {
      id
    }
    status
    invitationDate
  }
}
    `;
export type AddNewInvitationMutationFn = Apollo.MutationFunction<AddNewInvitationMutation, AddNewInvitationMutationVariables>;

/**
 * __useAddNewInvitationMutation__
 *
 * To run a mutation, you first call `useAddNewInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewInvitationMutation, { data, loading, error }] = useAddNewInvitationMutation({
 *   variables: {
 *      company: // value for 'company'
 *      student: // value for 'student'
 *      status: // value for 'status'
 *      invitationDate: // value for 'invitationDate'
 *   },
 * });
 */
export function useAddNewInvitationMutation(baseOptions?: Apollo.MutationHookOptions<AddNewInvitationMutation, AddNewInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNewInvitationMutation, AddNewInvitationMutationVariables>(AddNewInvitationDocument, options);
      }
export type AddNewInvitationMutationHookResult = ReturnType<typeof useAddNewInvitationMutation>;
export type AddNewInvitationMutationResult = Apollo.MutationResult<AddNewInvitationMutation>;
export type AddNewInvitationMutationOptions = Apollo.BaseMutationOptions<AddNewInvitationMutation, AddNewInvitationMutationVariables>;
export const UpdateInvitationDocument = gql`
    mutation updateInvitation($id: ID!, $status: ResponseStatus!) {
  updateInvitation(id: $id, status: $status) {
    id
    company {
      id
    }
    student {
      id
    }
    status
    invitationDate
  }
}
    `;
export type UpdateInvitationMutationFn = Apollo.MutationFunction<UpdateInvitationMutation, UpdateInvitationMutationVariables>;

/**
 * __useUpdateInvitationMutation__
 *
 * To run a mutation, you first call `useUpdateInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInvitationMutation, { data, loading, error }] = useUpdateInvitationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateInvitationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInvitationMutation, UpdateInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInvitationMutation, UpdateInvitationMutationVariables>(UpdateInvitationDocument, options);
      }
export type UpdateInvitationMutationHookResult = ReturnType<typeof useUpdateInvitationMutation>;
export type UpdateInvitationMutationResult = Apollo.MutationResult<UpdateInvitationMutation>;
export type UpdateInvitationMutationOptions = Apollo.BaseMutationOptions<UpdateInvitationMutation, UpdateInvitationMutationVariables>;
export const UpdateStudentInfoDocument = gql`
    mutation updateStudentInfo($id: ID!, $input: UpdateStudentInfoInput!) {
  updateStudent(id: $id, aboutStudent: $input) {
    id
    firstName
    aboutStudent
  }
}
    `;
export type UpdateStudentInfoMutationFn = Apollo.MutationFunction<UpdateStudentInfoMutation, UpdateStudentInfoMutationVariables>;

/**
 * __useUpdateStudentInfoMutation__
 *
 * To run a mutation, you first call `useUpdateStudentInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentInfoMutation, { data, loading, error }] = useUpdateStudentInfoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStudentInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentInfoMutation, UpdateStudentInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStudentInfoMutation, UpdateStudentInfoMutationVariables>(UpdateStudentInfoDocument, options);
      }
export type UpdateStudentInfoMutationHookResult = ReturnType<typeof useUpdateStudentInfoMutation>;
export type UpdateStudentInfoMutationResult = Apollo.MutationResult<UpdateStudentInfoMutation>;
export type UpdateStudentInfoMutationOptions = Apollo.BaseMutationOptions<UpdateStudentInfoMutation, UpdateStudentInfoMutationVariables>;
export const GetBookmarkedStudentsDocument = gql`
    query getBookmarkedStudents($companyID: ID!) {
  Company(id: $companyID) {
    bookmarkedStudents
  }
}
    `;

/**
 * __useGetBookmarkedStudentsQuery__
 *
 * To run a query within a React component, call `useGetBookmarkedStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookmarkedStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookmarkedStudentsQuery({
 *   variables: {
 *      companyID: // value for 'companyID'
 *   },
 * });
 */
export function useGetBookmarkedStudentsQuery(baseOptions: Apollo.QueryHookOptions<GetBookmarkedStudentsQuery, GetBookmarkedStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookmarkedStudentsQuery, GetBookmarkedStudentsQueryVariables>(GetBookmarkedStudentsDocument, options);
      }
export function useGetBookmarkedStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookmarkedStudentsQuery, GetBookmarkedStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookmarkedStudentsQuery, GetBookmarkedStudentsQueryVariables>(GetBookmarkedStudentsDocument, options);
        }
export type GetBookmarkedStudentsQueryHookResult = ReturnType<typeof useGetBookmarkedStudentsQuery>;
export type GetBookmarkedStudentsLazyQueryHookResult = ReturnType<typeof useGetBookmarkedStudentsLazyQuery>;
export type GetBookmarkedStudentsQueryResult = Apollo.QueryResult<GetBookmarkedStudentsQuery, GetBookmarkedStudentsQueryVariables>;
export const GetAllInvitationsDocument = gql`
    query getAllInvitations {
  allInvitations {
    id
    company {
      id
      name
      contacts
      bookmarkedStudents
    }
    student {
      ...StudentFields
    }
    invitationDate
    status
  }
}
    ${StudentFieldsFragmentDoc}`;

/**
 * __useGetAllInvitationsQuery__
 *
 * To run a query within a React component, call `useGetAllInvitationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllInvitationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllInvitationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllInvitationsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllInvitationsQuery, GetAllInvitationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllInvitationsQuery, GetAllInvitationsQueryVariables>(GetAllInvitationsDocument, options);
      }
export function useGetAllInvitationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllInvitationsQuery, GetAllInvitationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllInvitationsQuery, GetAllInvitationsQueryVariables>(GetAllInvitationsDocument, options);
        }
export type GetAllInvitationsQueryHookResult = ReturnType<typeof useGetAllInvitationsQuery>;
export type GetAllInvitationsLazyQueryHookResult = ReturnType<typeof useGetAllInvitationsLazyQuery>;
export type GetAllInvitationsQueryResult = Apollo.QueryResult<GetAllInvitationsQuery, GetAllInvitationsQueryVariables>;
export const GetAllStudentsDocument = gql`
    query getAllStudents {
  allStudents {
    ...StudentFields
  }
}
    ${StudentFieldsFragmentDoc}`;

/**
 * __useGetAllStudentsQuery__
 *
 * To run a query within a React component, call `useGetAllStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllStudentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllStudentsQuery, GetAllStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllStudentsQuery, GetAllStudentsQueryVariables>(GetAllStudentsDocument, options);
      }
export function useGetAllStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllStudentsQuery, GetAllStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllStudentsQuery, GetAllStudentsQueryVariables>(GetAllStudentsDocument, options);
        }
export type GetAllStudentsQueryHookResult = ReturnType<typeof useGetAllStudentsQuery>;
export type GetAllStudentsLazyQueryHookResult = ReturnType<typeof useGetAllStudentsLazyQuery>;
export type GetAllStudentsQueryResult = Apollo.QueryResult<GetAllStudentsQuery, GetAllStudentsQueryVariables>;