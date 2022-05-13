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
  Date: any;
};

export type Company = Node & {
  __typename?: 'Company';
  bookmarkedStudents: Array<Scalars['String']>;
  contacts: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  responses: Array<Response>;
};

export type Contacts = {
  __typename?: 'Contacts';
  city: Scalars['String'];
  eMail: Scalars['String'];
  socialMedia?: Maybe<SocialMedia>;
  tel: Scalars['String'];
};

export type Education = {
  __typename?: 'Education';
  additional?: Maybe<Scalars['String']>;
  english: Scalars['String'];
  formal: FormalEducation;
};

export type FormalEducation = {
  __typename?: 'FormalEducation';
  detailedInfo: Scalars['String'];
  level: Scalars['String'];
};

export type Invitation = Node & {
  __typename?: 'Invitation';
  company: Company;
  date: Scalars['Date'];
  id: Scalars['ID'];
  status: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  updateCompany: Company;
  updateStudent: Student;
};


export type MutationUpdateCompanyArgs = {
  bookmarkedStudents: Array<Scalars['String']>;
  id: Scalars['ID'];
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
  allStudents: Array<Student>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryStudentArgs = {
  id: Scalars['ID'];
};

export type Response = Node & {
  __typename?: 'Response';
  date: Scalars['Date'];
  id: Scalars['ID'];
  status: Scalars['String'];
  student: Student;
};

export type SocialMedia = {
  __typename?: 'SocialMedia';
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  vk?: Maybe<Scalars['String']>;
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
  invitations: Array<Invitation>;
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

export type UpdateBookmarkedStudentsMutationVariables = Exact<{
  companyId: Scalars['ID'];
  input: Array<Scalars['String']> | Scalars['String'];
}>;


export type UpdateBookmarkedStudentsMutation = { __typename?: 'Mutation', updateCompany: { __typename?: 'Company', bookmarkedStudents: Array<string> } };

export type UpdateStudentInfoMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateStudentInfoInput;
}>;


export type UpdateStudentInfoMutation = { __typename?: 'Mutation', updateStudent: { __typename?: 'Student', id: string, firstName: string, aboutStudent: string } };

export type GetBookmarkedStudentsQueryVariables = Exact<{
  companyID: Scalars['ID'];
}>;


export type GetBookmarkedStudentsQuery = { __typename?: 'Query', Company: { __typename?: 'Company', bookmarkedStudents: Array<string> } };

export type GetResponsesQueryVariables = Exact<{
  companyID: Scalars['ID'];
}>;


export type GetResponsesQuery = { __typename?: 'Query', Company: { __typename?: 'Company', responses: Array<{ __typename?: 'Response', date: any, status: string, student: { __typename?: 'Student', firstName: string, lastName: string, img?: string | null, position: string, course: string, bestStudentMark: boolean, contacts: { __typename?: 'Contacts', tel: string } } }> } };

export type GetAllStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStudentsQuery = { __typename?: 'Query', allStudents: Array<{ __typename?: 'Student', id: string, img?: string | null, firstName: string, lastName: string, position: string, course: string, skills: Array<string>, bestStudentMark: boolean, schoolRecommendation: string, score: number, diplomaLink: string, aboutStudent: string, showContacts: boolean, education: { __typename?: 'Education', english: string, additional?: string | null, formal: { __typename?: 'FormalEducation', level: string, detailedInfo: string } }, contacts: { __typename?: 'Contacts', city: string, tel: string, eMail: string, socialMedia?: { __typename?: 'SocialMedia', linkedin?: string | null } | null } }> };

export type GetInvitationsQueryVariables = Exact<{
  studentID: Scalars['ID'];
}>;


export type GetInvitationsQuery = { __typename?: 'Query', Student: { __typename?: 'Student', invitations: Array<{ __typename?: 'Invitation', date: any, status: string, company: { __typename?: 'Company', name: string, contacts: string } }> } };


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
export const GetResponsesDocument = gql`
    query getResponses($companyID: ID!) {
  Company(id: $companyID) {
    responses {
      student {
        firstName
        lastName
        img
        position
        course
        bestStudentMark
        contacts {
          tel
        }
      }
      date
      status
    }
  }
}
    `;

/**
 * __useGetResponsesQuery__
 *
 * To run a query within a React component, call `useGetResponsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResponsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResponsesQuery({
 *   variables: {
 *      companyID: // value for 'companyID'
 *   },
 * });
 */
export function useGetResponsesQuery(baseOptions: Apollo.QueryHookOptions<GetResponsesQuery, GetResponsesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResponsesQuery, GetResponsesQueryVariables>(GetResponsesDocument, options);
      }
export function useGetResponsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResponsesQuery, GetResponsesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResponsesQuery, GetResponsesQueryVariables>(GetResponsesDocument, options);
        }
export type GetResponsesQueryHookResult = ReturnType<typeof useGetResponsesQuery>;
export type GetResponsesLazyQueryHookResult = ReturnType<typeof useGetResponsesLazyQuery>;
export type GetResponsesQueryResult = Apollo.QueryResult<GetResponsesQuery, GetResponsesQueryVariables>;
export const GetAllStudentsDocument = gql`
    query getAllStudents {
  allStudents {
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
}
    `;

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
export const GetInvitationsDocument = gql`
    query getInvitations($studentID: ID!) {
  Student(id: $studentID) {
    invitations {
      company {
        name
        contacts
      }
      date
      status
    }
  }
}
    `;

/**
 * __useGetInvitationsQuery__
 *
 * To run a query within a React component, call `useGetInvitationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInvitationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInvitationsQuery({
 *   variables: {
 *      studentID: // value for 'studentID'
 *   },
 * });
 */
export function useGetInvitationsQuery(baseOptions: Apollo.QueryHookOptions<GetInvitationsQuery, GetInvitationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInvitationsQuery, GetInvitationsQueryVariables>(GetInvitationsDocument, options);
      }
export function useGetInvitationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInvitationsQuery, GetInvitationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInvitationsQuery, GetInvitationsQueryVariables>(GetInvitationsDocument, options);
        }
export type GetInvitationsQueryHookResult = ReturnType<typeof useGetInvitationsQuery>;
export type GetInvitationsLazyQueryHookResult = ReturnType<typeof useGetInvitationsLazyQuery>;
export type GetInvitationsQueryResult = Apollo.QueryResult<GetInvitationsQuery, GetInvitationsQueryVariables>;