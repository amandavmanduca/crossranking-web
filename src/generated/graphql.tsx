import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Box = {
  __typename?: 'Box';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  athletes?: Maybe<Array<Athlete>>;
  athletesAggregate: BoxAthletesAggregateResponse;
};


export type BoxAthletesArgs = {
  filter?: Maybe<AthleteFilter>;
  sorting?: Maybe<Array<AthleteSort>>;
};


export type BoxAthletesAggregateArgs = {
  filter?: Maybe<AthleteAggregateFilter>;
};

export type AthleteFilter = {
  and?: Maybe<Array<AthleteFilter>>;
  or?: Maybe<Array<AthleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  firstname?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  birth?: Maybe<StringFieldComparison>;
  sex?: Maybe<StringFieldComparison>;
  cpf?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  category?: Maybe<AthleteFilterCategoryFilter>;
  competitionRanks?: Maybe<AthleteFilterCompetitionRankFilter>;
  competitions?: Maybe<AthleteFilterCompetitionFilter>;
  results?: Maybe<AthleteFilterResultFilter>;
};

export type IdFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['ID']>;
  neq?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  like?: Maybe<Scalars['ID']>;
  notLike?: Maybe<Scalars['ID']>;
  iLike?: Maybe<Scalars['ID']>;
  notILike?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  notIn?: Maybe<Array<Scalars['ID']>>;
};

export type StringFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  notLike?: Maybe<Scalars['String']>;
  iLike?: Maybe<Scalars['String']>;
  notILike?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type AthleteFilterCategoryFilter = {
  and?: Maybe<Array<AthleteFilterCategoryFilter>>;
  or?: Maybe<Array<AthleteFilterCategoryFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type AthleteFilterCompetitionRankFilter = {
  and?: Maybe<Array<AthleteFilterCompetitionRankFilter>>;
  or?: Maybe<Array<AthleteFilterCompetitionRankFilter>>;
  rank?: Maybe<NumberFieldComparison>;
  points?: Maybe<NumberFieldComparison>;
};

export type NumberFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Float']>;
  neq?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  between?: Maybe<NumberFieldComparisonBetween>;
  notBetween?: Maybe<NumberFieldComparisonBetween>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type AthleteFilterCompetitionFilter = {
  and?: Maybe<Array<AthleteFilterCompetitionFilter>>;
  or?: Maybe<Array<AthleteFilterCompetitionFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  season?: Maybe<NumberFieldComparison>;
  date?: Maybe<StringFieldComparison>;
  place?: Maybe<StringFieldComparison>;
  weight?: Maybe<NumberFieldComparison>;
};

export type AthleteFilterResultFilter = {
  and?: Maybe<Array<AthleteFilterResultFilter>>;
  or?: Maybe<Array<AthleteFilterResultFilter>>;
  result?: Maybe<NumberFieldComparison>;
  rank?: Maybe<NumberFieldComparison>;
};

export type AthleteSort = {
  field: AthleteSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum AthleteSortFields {
  Id = 'id',
  Firstname = 'firstname',
  Lastname = 'lastname',
  Birth = 'birth',
  Sex = 'sex',
  Cpf = 'cpf',
  Email = 'email'
}

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type AthleteAggregateFilter = {
  and?: Maybe<Array<AthleteAggregateFilter>>;
  or?: Maybe<Array<AthleteAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  firstname?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  birth?: Maybe<StringFieldComparison>;
  sex?: Maybe<StringFieldComparison>;
  cpf?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type Result = {
  __typename?: 'Result';
  id: Scalars['ID'];
  result: Scalars['Float'];
  rank?: Maybe<Scalars['Float']>;
  athlete?: Maybe<Athlete>;
  workout?: Maybe<Workout>;
};

export type WorkoutType = {
  __typename?: 'WorkoutType';
  id: Scalars['ID'];
  name: Scalars['String'];
  workouts?: Maybe<Array<Workout>>;
  workoutsAggregate: WorkoutTypeWorkoutsAggregateResponse;
};


export type WorkoutTypeWorkoutsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<WorkoutFilter>;
  sorting?: Maybe<Array<WorkoutSort>>;
};


export type WorkoutTypeWorkoutsAggregateArgs = {
  filter?: Maybe<WorkoutAggregateFilter>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: Maybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: Maybe<Scalars['Int']>;
};

export type WorkoutFilter = {
  and?: Maybe<Array<WorkoutFilter>>;
  or?: Maybe<Array<WorkoutFilter>>;
  name?: Maybe<StringFieldComparison>;
  results?: Maybe<WorkoutFilterResultFilter>;
};

export type WorkoutFilterResultFilter = {
  and?: Maybe<Array<WorkoutFilterResultFilter>>;
  or?: Maybe<Array<WorkoutFilterResultFilter>>;
  result?: Maybe<NumberFieldComparison>;
  rank?: Maybe<NumberFieldComparison>;
};

export type WorkoutSort = {
  field: WorkoutSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum WorkoutSortFields {
  Name = 'name'
}

export type WorkoutAggregateFilter = {
  and?: Maybe<Array<WorkoutAggregateFilter>>;
  or?: Maybe<Array<WorkoutAggregateFilter>>;
  name?: Maybe<StringFieldComparison>;
};

export type Workout = {
  __typename?: 'Workout';
  id: Scalars['ID'];
  name: Scalars['String'];
  results?: Maybe<Array<Result>>;
  competition?: Maybe<Competition>;
  workoutType?: Maybe<WorkoutType>;
  category?: Maybe<Category>;
  resultsAggregate: WorkoutResultsAggregateResponse;
};


export type WorkoutResultsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ResultFilter>;
  sorting?: Maybe<Array<ResultSort>>;
};


export type WorkoutResultsAggregateArgs = {
  filter?: Maybe<ResultAggregateFilter>;
};

export type ResultFilter = {
  and?: Maybe<Array<ResultFilter>>;
  or?: Maybe<Array<ResultFilter>>;
  result?: Maybe<NumberFieldComparison>;
  rank?: Maybe<NumberFieldComparison>;
};

export type ResultSort = {
  field: ResultSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum ResultSortFields {
  Result = 'result',
  Rank = 'rank'
}

export type ResultAggregateFilter = {
  and?: Maybe<Array<ResultAggregateFilter>>;
  or?: Maybe<Array<ResultAggregateFilter>>;
  result?: Maybe<NumberFieldComparison>;
  rank?: Maybe<NumberFieldComparison>;
};

export type Competition = {
  __typename?: 'Competition';
  id: Scalars['ID'];
  name: Scalars['String'];
  season?: Maybe<Scalars['Float']>;
  date: Scalars['String'];
  place: Scalars['String'];
  weight?: Maybe<Scalars['Float']>;
  competitionRanks?: Maybe<Array<CompetitionRank>>;
  categories?: Maybe<Array<Category>>;
  athletes?: Maybe<Array<Athlete>>;
  workouts?: Maybe<Array<Workout>>;
  competitionRanksAggregate: CompetitionCompetitionRanksAggregateResponse;
  categoriesAggregate: CompetitionCategoriesAggregateResponse;
  athletesAggregate: CompetitionAthletesAggregateResponse;
  workoutsAggregate: CompetitionWorkoutsAggregateResponse;
};


export type CompetitionCompetitionRanksArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<CompetitionRankFilter>;
  sorting?: Maybe<Array<CompetitionRankSort>>;
};


export type CompetitionCategoriesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<CategoryFilter>;
  sorting?: Maybe<Array<CategorySort>>;
};


export type CompetitionAthletesArgs = {
  filter?: Maybe<AthleteFilter>;
  sorting?: Maybe<Array<AthleteSort>>;
};


export type CompetitionWorkoutsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<WorkoutFilter>;
  sorting?: Maybe<Array<WorkoutSort>>;
};


export type CompetitionCompetitionRanksAggregateArgs = {
  filter?: Maybe<CompetitionRankAggregateFilter>;
};


export type CompetitionCategoriesAggregateArgs = {
  filter?: Maybe<CategoryAggregateFilter>;
};


export type CompetitionAthletesAggregateArgs = {
  filter?: Maybe<AthleteAggregateFilter>;
};


export type CompetitionWorkoutsAggregateArgs = {
  filter?: Maybe<WorkoutAggregateFilter>;
};

export type CompetitionRankFilter = {
  and?: Maybe<Array<CompetitionRankFilter>>;
  or?: Maybe<Array<CompetitionRankFilter>>;
  rank?: Maybe<NumberFieldComparison>;
  points?: Maybe<NumberFieldComparison>;
  competition?: Maybe<CompetitionRankFilterCompetitionFilter>;
  category?: Maybe<CompetitionRankFilterCategoryFilter>;
  athlete?: Maybe<CompetitionRankFilterAthleteFilter>;
};

export type CompetitionRankFilterCompetitionFilter = {
  and?: Maybe<Array<CompetitionRankFilterCompetitionFilter>>;
  or?: Maybe<Array<CompetitionRankFilterCompetitionFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  season?: Maybe<NumberFieldComparison>;
  date?: Maybe<StringFieldComparison>;
  place?: Maybe<StringFieldComparison>;
  weight?: Maybe<NumberFieldComparison>;
};

export type CompetitionRankFilterCategoryFilter = {
  and?: Maybe<Array<CompetitionRankFilterCategoryFilter>>;
  or?: Maybe<Array<CompetitionRankFilterCategoryFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type CompetitionRankFilterAthleteFilter = {
  and?: Maybe<Array<CompetitionRankFilterAthleteFilter>>;
  or?: Maybe<Array<CompetitionRankFilterAthleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  firstname?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  birth?: Maybe<StringFieldComparison>;
  sex?: Maybe<StringFieldComparison>;
  cpf?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type CompetitionRankSort = {
  field: CompetitionRankSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum CompetitionRankSortFields {
  Rank = 'rank',
  Points = 'points'
}

export type CategoryFilter = {
  and?: Maybe<Array<CategoryFilter>>;
  or?: Maybe<Array<CategoryFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  competitions?: Maybe<CategoryFilterCompetitionFilter>;
  workouts?: Maybe<CategoryFilterWorkoutFilter>;
  competitionRanks?: Maybe<CategoryFilterCompetitionRankFilter>;
  athletes?: Maybe<CategoryFilterAthleteFilter>;
};

export type CategoryFilterCompetitionFilter = {
  and?: Maybe<Array<CategoryFilterCompetitionFilter>>;
  or?: Maybe<Array<CategoryFilterCompetitionFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  season?: Maybe<NumberFieldComparison>;
  date?: Maybe<StringFieldComparison>;
  place?: Maybe<StringFieldComparison>;
  weight?: Maybe<NumberFieldComparison>;
};

export type CategoryFilterWorkoutFilter = {
  and?: Maybe<Array<CategoryFilterWorkoutFilter>>;
  or?: Maybe<Array<CategoryFilterWorkoutFilter>>;
  name?: Maybe<StringFieldComparison>;
};

export type CategoryFilterCompetitionRankFilter = {
  and?: Maybe<Array<CategoryFilterCompetitionRankFilter>>;
  or?: Maybe<Array<CategoryFilterCompetitionRankFilter>>;
  rank?: Maybe<NumberFieldComparison>;
  points?: Maybe<NumberFieldComparison>;
};

export type CategoryFilterAthleteFilter = {
  and?: Maybe<Array<CategoryFilterAthleteFilter>>;
  or?: Maybe<Array<CategoryFilterAthleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  firstname?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  birth?: Maybe<StringFieldComparison>;
  sex?: Maybe<StringFieldComparison>;
  cpf?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type CategorySort = {
  field: CategorySortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum CategorySortFields {
  Id = 'id',
  Name = 'name'
}

export type CompetitionRankAggregateFilter = {
  and?: Maybe<Array<CompetitionRankAggregateFilter>>;
  or?: Maybe<Array<CompetitionRankAggregateFilter>>;
  rank?: Maybe<NumberFieldComparison>;
  points?: Maybe<NumberFieldComparison>;
};

export type CategoryAggregateFilter = {
  and?: Maybe<Array<CategoryAggregateFilter>>;
  or?: Maybe<Array<CategoryAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type CompetitionRank = {
  __typename?: 'CompetitionRank';
  id: Scalars['ID'];
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  competition?: Maybe<Competition>;
  category?: Maybe<Category>;
  athlete?: Maybe<Athlete>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  competitions?: Maybe<Array<Competition>>;
  workouts?: Maybe<Array<Workout>>;
  competitionRanks?: Maybe<Array<CompetitionRank>>;
  athletes?: Maybe<Array<Athlete>>;
  competitionsAggregate: CategoryCompetitionsAggregateResponse;
  workoutsAggregate: CategoryWorkoutsAggregateResponse;
  competitionRanksAggregate: CategoryCompetitionRanksAggregateResponse;
  athletesAggregate: CategoryAthletesAggregateResponse;
};


export type CategoryCompetitionsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<CompetitionFilter>;
  sorting?: Maybe<Array<CompetitionSort>>;
};


export type CategoryWorkoutsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<WorkoutFilter>;
  sorting?: Maybe<Array<WorkoutSort>>;
};


export type CategoryCompetitionRanksArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<CompetitionRankFilter>;
  sorting?: Maybe<Array<CompetitionRankSort>>;
};


export type CategoryAthletesArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<AthleteFilter>;
  sorting?: Maybe<Array<AthleteSort>>;
};


export type CategoryCompetitionsAggregateArgs = {
  filter?: Maybe<CompetitionAggregateFilter>;
};


export type CategoryWorkoutsAggregateArgs = {
  filter?: Maybe<WorkoutAggregateFilter>;
};


export type CategoryCompetitionRanksAggregateArgs = {
  filter?: Maybe<CompetitionRankAggregateFilter>;
};


export type CategoryAthletesAggregateArgs = {
  filter?: Maybe<AthleteAggregateFilter>;
};

export type CompetitionFilter = {
  and?: Maybe<Array<CompetitionFilter>>;
  or?: Maybe<Array<CompetitionFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  season?: Maybe<NumberFieldComparison>;
  date?: Maybe<StringFieldComparison>;
  place?: Maybe<StringFieldComparison>;
  weight?: Maybe<NumberFieldComparison>;
  competitionRanks?: Maybe<CompetitionFilterCompetitionRankFilter>;
  categories?: Maybe<CompetitionFilterCategoryFilter>;
  athletes?: Maybe<CompetitionFilterAthleteFilter>;
  workouts?: Maybe<CompetitionFilterWorkoutFilter>;
};

export type CompetitionFilterCompetitionRankFilter = {
  and?: Maybe<Array<CompetitionFilterCompetitionRankFilter>>;
  or?: Maybe<Array<CompetitionFilterCompetitionRankFilter>>;
  rank?: Maybe<NumberFieldComparison>;
  points?: Maybe<NumberFieldComparison>;
};

export type CompetitionFilterCategoryFilter = {
  and?: Maybe<Array<CompetitionFilterCategoryFilter>>;
  or?: Maybe<Array<CompetitionFilterCategoryFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type CompetitionFilterAthleteFilter = {
  and?: Maybe<Array<CompetitionFilterAthleteFilter>>;
  or?: Maybe<Array<CompetitionFilterAthleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  firstname?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  birth?: Maybe<StringFieldComparison>;
  sex?: Maybe<StringFieldComparison>;
  cpf?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type CompetitionFilterWorkoutFilter = {
  and?: Maybe<Array<CompetitionFilterWorkoutFilter>>;
  or?: Maybe<Array<CompetitionFilterWorkoutFilter>>;
  name?: Maybe<StringFieldComparison>;
};

export type CompetitionSort = {
  field: CompetitionSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum CompetitionSortFields {
  Id = 'id',
  Name = 'name',
  Season = 'season',
  Date = 'date',
  Place = 'place',
  Weight = 'weight'
}

export type CompetitionAggregateFilter = {
  and?: Maybe<Array<CompetitionAggregateFilter>>;
  or?: Maybe<Array<CompetitionAggregateFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  season?: Maybe<NumberFieldComparison>;
  date?: Maybe<StringFieldComparison>;
  place?: Maybe<StringFieldComparison>;
  weight?: Maybe<NumberFieldComparison>;
};

export type Athlete = {
  __typename?: 'Athlete';
  id: Scalars['ID'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  birth: Scalars['String'];
  sex: Scalars['String'];
  cpf: Scalars['String'];
  email: Scalars['String'];
  competitionRanks?: Maybe<Array<CompetitionRank>>;
  competitions?: Maybe<Array<Competition>>;
  results?: Maybe<Array<Result>>;
  box?: Maybe<Box>;
  category?: Maybe<Category>;
  competitionRanksAggregate: AthleteCompetitionRanksAggregateResponse;
  competitionsAggregate: AthleteCompetitionsAggregateResponse;
  resultsAggregate: AthleteResultsAggregateResponse;
};


export type AthleteCompetitionRanksArgs = {
  filter?: Maybe<CompetitionRankFilter>;
  sorting?: Maybe<Array<CompetitionRankSort>>;
};


export type AthleteCompetitionsArgs = {
  filter?: Maybe<CompetitionFilter>;
  sorting?: Maybe<Array<CompetitionSort>>;
};


export type AthleteResultsArgs = {
  paging?: Maybe<OffsetPaging>;
  filter?: Maybe<ResultFilter>;
  sorting?: Maybe<Array<ResultSort>>;
};


export type AthleteCompetitionRanksAggregateArgs = {
  filter?: Maybe<CompetitionRankAggregateFilter>;
};


export type AthleteCompetitionsAggregateArgs = {
  filter?: Maybe<CompetitionAggregateFilter>;
};


export type AthleteResultsAggregateArgs = {
  filter?: Maybe<ResultAggregateFilter>;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type BoxDeleteResponse = {
  __typename?: 'BoxDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type BoxCountAggregate = {
  __typename?: 'BoxCountAggregate';
  name?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['Int']>;
};

export type BoxMinAggregate = {
  __typename?: 'BoxMinAggregate';
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

export type BoxMaxAggregate = {
  __typename?: 'BoxMaxAggregate';
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

export type BoxAggregateResponse = {
  __typename?: 'BoxAggregateResponse';
  count?: Maybe<BoxCountAggregate>;
  min?: Maybe<BoxMinAggregate>;
  max?: Maybe<BoxMaxAggregate>;
};

export type BoxAthletesCountAggregate = {
  __typename?: 'BoxAthletesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['Int']>;
  birth?: Maybe<Scalars['Int']>;
  sex?: Maybe<Scalars['Int']>;
  cpf?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
};

export type BoxAthletesMinAggregate = {
  __typename?: 'BoxAthletesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  birth?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type BoxAthletesMaxAggregate = {
  __typename?: 'BoxAthletesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  birth?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type BoxAthletesAggregateResponse = {
  __typename?: 'BoxAthletesAggregateResponse';
  count?: Maybe<BoxAthletesCountAggregate>;
  min?: Maybe<BoxAthletesMinAggregate>;
  max?: Maybe<BoxAthletesMaxAggregate>;
};

export type AthleteDeleteResponse = {
  __typename?: 'AthleteDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  birth?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type AthleteCountAggregate = {
  __typename?: 'AthleteCountAggregate';
  id?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['Int']>;
  birth?: Maybe<Scalars['Int']>;
  sex?: Maybe<Scalars['Int']>;
  cpf?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
};

export type AthleteMinAggregate = {
  __typename?: 'AthleteMinAggregate';
  id?: Maybe<Scalars['ID']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  birth?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type AthleteMaxAggregate = {
  __typename?: 'AthleteMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  birth?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type AthleteAggregateResponse = {
  __typename?: 'AthleteAggregateResponse';
  count?: Maybe<AthleteCountAggregate>;
  min?: Maybe<AthleteMinAggregate>;
  max?: Maybe<AthleteMaxAggregate>;
};

export type AthleteCompetitionRanksCountAggregate = {
  __typename?: 'AthleteCompetitionRanksCountAggregate';
  rank?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
};

export type AthleteCompetitionRanksSumAggregate = {
  __typename?: 'AthleteCompetitionRanksSumAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type AthleteCompetitionRanksAvgAggregate = {
  __typename?: 'AthleteCompetitionRanksAvgAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type AthleteCompetitionRanksMinAggregate = {
  __typename?: 'AthleteCompetitionRanksMinAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type AthleteCompetitionRanksMaxAggregate = {
  __typename?: 'AthleteCompetitionRanksMaxAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type AthleteCompetitionRanksAggregateResponse = {
  __typename?: 'AthleteCompetitionRanksAggregateResponse';
  count?: Maybe<AthleteCompetitionRanksCountAggregate>;
  sum?: Maybe<AthleteCompetitionRanksSumAggregate>;
  avg?: Maybe<AthleteCompetitionRanksAvgAggregate>;
  min?: Maybe<AthleteCompetitionRanksMinAggregate>;
  max?: Maybe<AthleteCompetitionRanksMaxAggregate>;
};

export type AthleteCompetitionsCountAggregate = {
  __typename?: 'AthleteCompetitionsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  place?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

export type AthleteCompetitionsSumAggregate = {
  __typename?: 'AthleteCompetitionsSumAggregate';
  season?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type AthleteCompetitionsAvgAggregate = {
  __typename?: 'AthleteCompetitionsAvgAggregate';
  season?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type AthleteCompetitionsMinAggregate = {
  __typename?: 'AthleteCompetitionsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type AthleteCompetitionsMaxAggregate = {
  __typename?: 'AthleteCompetitionsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type AthleteCompetitionsAggregateResponse = {
  __typename?: 'AthleteCompetitionsAggregateResponse';
  count?: Maybe<AthleteCompetitionsCountAggregate>;
  sum?: Maybe<AthleteCompetitionsSumAggregate>;
  avg?: Maybe<AthleteCompetitionsAvgAggregate>;
  min?: Maybe<AthleteCompetitionsMinAggregate>;
  max?: Maybe<AthleteCompetitionsMaxAggregate>;
};

export type AthleteResultsCountAggregate = {
  __typename?: 'AthleteResultsCountAggregate';
  result?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
};

export type AthleteResultsSumAggregate = {
  __typename?: 'AthleteResultsSumAggregate';
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type AthleteResultsAvgAggregate = {
  __typename?: 'AthleteResultsAvgAggregate';
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type AthleteResultsMinAggregate = {
  __typename?: 'AthleteResultsMinAggregate';
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type AthleteResultsMaxAggregate = {
  __typename?: 'AthleteResultsMaxAggregate';
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type AthleteResultsAggregateResponse = {
  __typename?: 'AthleteResultsAggregateResponse';
  count?: Maybe<AthleteResultsCountAggregate>;
  sum?: Maybe<AthleteResultsSumAggregate>;
  avg?: Maybe<AthleteResultsAvgAggregate>;
  min?: Maybe<AthleteResultsMinAggregate>;
  max?: Maybe<AthleteResultsMaxAggregate>;
};

export type CompetitionDeleteResponse = {
  __typename?: 'CompetitionDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type CompetitionCountAggregate = {
  __typename?: 'CompetitionCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  place?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

export type CompetitionSumAggregate = {
  __typename?: 'CompetitionSumAggregate';
  season?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type CompetitionAvgAggregate = {
  __typename?: 'CompetitionAvgAggregate';
  season?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type CompetitionMinAggregate = {
  __typename?: 'CompetitionMinAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type CompetitionMaxAggregate = {
  __typename?: 'CompetitionMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type CompetitionAggregateResponse = {
  __typename?: 'CompetitionAggregateResponse';
  count?: Maybe<CompetitionCountAggregate>;
  sum?: Maybe<CompetitionSumAggregate>;
  avg?: Maybe<CompetitionAvgAggregate>;
  min?: Maybe<CompetitionMinAggregate>;
  max?: Maybe<CompetitionMaxAggregate>;
};

export type CompetitionCompetitionRanksCountAggregate = {
  __typename?: 'CompetitionCompetitionRanksCountAggregate';
  rank?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
};

export type CompetitionCompetitionRanksSumAggregate = {
  __typename?: 'CompetitionCompetitionRanksSumAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CompetitionCompetitionRanksAvgAggregate = {
  __typename?: 'CompetitionCompetitionRanksAvgAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CompetitionCompetitionRanksMinAggregate = {
  __typename?: 'CompetitionCompetitionRanksMinAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CompetitionCompetitionRanksMaxAggregate = {
  __typename?: 'CompetitionCompetitionRanksMaxAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CompetitionCompetitionRanksAggregateResponse = {
  __typename?: 'CompetitionCompetitionRanksAggregateResponse';
  count?: Maybe<CompetitionCompetitionRanksCountAggregate>;
  sum?: Maybe<CompetitionCompetitionRanksSumAggregate>;
  avg?: Maybe<CompetitionCompetitionRanksAvgAggregate>;
  min?: Maybe<CompetitionCompetitionRanksMinAggregate>;
  max?: Maybe<CompetitionCompetitionRanksMaxAggregate>;
};

export type CompetitionCategoriesCountAggregate = {
  __typename?: 'CompetitionCategoriesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type CompetitionCategoriesMinAggregate = {
  __typename?: 'CompetitionCategoriesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CompetitionCategoriesMaxAggregate = {
  __typename?: 'CompetitionCategoriesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CompetitionCategoriesAggregateResponse = {
  __typename?: 'CompetitionCategoriesAggregateResponse';
  count?: Maybe<CompetitionCategoriesCountAggregate>;
  min?: Maybe<CompetitionCategoriesMinAggregate>;
  max?: Maybe<CompetitionCategoriesMaxAggregate>;
};

export type CompetitionAthletesCountAggregate = {
  __typename?: 'CompetitionAthletesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['Int']>;
  birth?: Maybe<Scalars['Int']>;
  sex?: Maybe<Scalars['Int']>;
  cpf?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
};

export type CompetitionAthletesMinAggregate = {
  __typename?: 'CompetitionAthletesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  birth?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type CompetitionAthletesMaxAggregate = {
  __typename?: 'CompetitionAthletesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  birth?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type CompetitionAthletesAggregateResponse = {
  __typename?: 'CompetitionAthletesAggregateResponse';
  count?: Maybe<CompetitionAthletesCountAggregate>;
  min?: Maybe<CompetitionAthletesMinAggregate>;
  max?: Maybe<CompetitionAthletesMaxAggregate>;
};

export type CompetitionWorkoutsCountAggregate = {
  __typename?: 'CompetitionWorkoutsCountAggregate';
  name?: Maybe<Scalars['Int']>;
};

export type CompetitionWorkoutsMinAggregate = {
  __typename?: 'CompetitionWorkoutsMinAggregate';
  name?: Maybe<Scalars['String']>;
};

export type CompetitionWorkoutsMaxAggregate = {
  __typename?: 'CompetitionWorkoutsMaxAggregate';
  name?: Maybe<Scalars['String']>;
};

export type CompetitionWorkoutsAggregateResponse = {
  __typename?: 'CompetitionWorkoutsAggregateResponse';
  count?: Maybe<CompetitionWorkoutsCountAggregate>;
  min?: Maybe<CompetitionWorkoutsMinAggregate>;
  max?: Maybe<CompetitionWorkoutsMaxAggregate>;
};

export type CategoryDeleteResponse = {
  __typename?: 'CategoryDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CategoryAggregateResponse = {
  __typename?: 'CategoryAggregateResponse';
  count?: Maybe<CategoryCountAggregate>;
  min?: Maybe<CategoryMinAggregate>;
  max?: Maybe<CategoryMaxAggregate>;
};

export type CategoryCompetitionsCountAggregate = {
  __typename?: 'CategoryCompetitionsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  place?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

export type CategoryCompetitionsSumAggregate = {
  __typename?: 'CategoryCompetitionsSumAggregate';
  season?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type CategoryCompetitionsAvgAggregate = {
  __typename?: 'CategoryCompetitionsAvgAggregate';
  season?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type CategoryCompetitionsMinAggregate = {
  __typename?: 'CategoryCompetitionsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type CategoryCompetitionsMaxAggregate = {
  __typename?: 'CategoryCompetitionsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type CategoryCompetitionsAggregateResponse = {
  __typename?: 'CategoryCompetitionsAggregateResponse';
  count?: Maybe<CategoryCompetitionsCountAggregate>;
  sum?: Maybe<CategoryCompetitionsSumAggregate>;
  avg?: Maybe<CategoryCompetitionsAvgAggregate>;
  min?: Maybe<CategoryCompetitionsMinAggregate>;
  max?: Maybe<CategoryCompetitionsMaxAggregate>;
};

export type CategoryWorkoutsCountAggregate = {
  __typename?: 'CategoryWorkoutsCountAggregate';
  name?: Maybe<Scalars['Int']>;
};

export type CategoryWorkoutsMinAggregate = {
  __typename?: 'CategoryWorkoutsMinAggregate';
  name?: Maybe<Scalars['String']>;
};

export type CategoryWorkoutsMaxAggregate = {
  __typename?: 'CategoryWorkoutsMaxAggregate';
  name?: Maybe<Scalars['String']>;
};

export type CategoryWorkoutsAggregateResponse = {
  __typename?: 'CategoryWorkoutsAggregateResponse';
  count?: Maybe<CategoryWorkoutsCountAggregate>;
  min?: Maybe<CategoryWorkoutsMinAggregate>;
  max?: Maybe<CategoryWorkoutsMaxAggregate>;
};

export type CategoryCompetitionRanksCountAggregate = {
  __typename?: 'CategoryCompetitionRanksCountAggregate';
  rank?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
};

export type CategoryCompetitionRanksSumAggregate = {
  __typename?: 'CategoryCompetitionRanksSumAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CategoryCompetitionRanksAvgAggregate = {
  __typename?: 'CategoryCompetitionRanksAvgAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CategoryCompetitionRanksMinAggregate = {
  __typename?: 'CategoryCompetitionRanksMinAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CategoryCompetitionRanksMaxAggregate = {
  __typename?: 'CategoryCompetitionRanksMaxAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CategoryCompetitionRanksAggregateResponse = {
  __typename?: 'CategoryCompetitionRanksAggregateResponse';
  count?: Maybe<CategoryCompetitionRanksCountAggregate>;
  sum?: Maybe<CategoryCompetitionRanksSumAggregate>;
  avg?: Maybe<CategoryCompetitionRanksAvgAggregate>;
  min?: Maybe<CategoryCompetitionRanksMinAggregate>;
  max?: Maybe<CategoryCompetitionRanksMaxAggregate>;
};

export type CategoryAthletesCountAggregate = {
  __typename?: 'CategoryAthletesCountAggregate';
  id?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['Int']>;
  birth?: Maybe<Scalars['Int']>;
  sex?: Maybe<Scalars['Int']>;
  cpf?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
};

export type CategoryAthletesMinAggregate = {
  __typename?: 'CategoryAthletesMinAggregate';
  id?: Maybe<Scalars['ID']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  birth?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type CategoryAthletesMaxAggregate = {
  __typename?: 'CategoryAthletesMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  birth?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type CategoryAthletesAggregateResponse = {
  __typename?: 'CategoryAthletesAggregateResponse';
  count?: Maybe<CategoryAthletesCountAggregate>;
  min?: Maybe<CategoryAthletesMinAggregate>;
  max?: Maybe<CategoryAthletesMaxAggregate>;
};

export type WorkoutTypeDeleteResponse = {
  __typename?: 'WorkoutTypeDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type WorkoutTypeCountAggregate = {
  __typename?: 'WorkoutTypeCountAggregate';
  name?: Maybe<Scalars['Int']>;
};

export type WorkoutTypeMinAggregate = {
  __typename?: 'WorkoutTypeMinAggregate';
  name?: Maybe<Scalars['String']>;
};

export type WorkoutTypeMaxAggregate = {
  __typename?: 'WorkoutTypeMaxAggregate';
  name?: Maybe<Scalars['String']>;
};

export type WorkoutTypeAggregateResponse = {
  __typename?: 'WorkoutTypeAggregateResponse';
  count?: Maybe<WorkoutTypeCountAggregate>;
  min?: Maybe<WorkoutTypeMinAggregate>;
  max?: Maybe<WorkoutTypeMaxAggregate>;
};

export type WorkoutTypeWorkoutsCountAggregate = {
  __typename?: 'WorkoutTypeWorkoutsCountAggregate';
  name?: Maybe<Scalars['Int']>;
};

export type WorkoutTypeWorkoutsMinAggregate = {
  __typename?: 'WorkoutTypeWorkoutsMinAggregate';
  name?: Maybe<Scalars['String']>;
};

export type WorkoutTypeWorkoutsMaxAggregate = {
  __typename?: 'WorkoutTypeWorkoutsMaxAggregate';
  name?: Maybe<Scalars['String']>;
};

export type WorkoutTypeWorkoutsAggregateResponse = {
  __typename?: 'WorkoutTypeWorkoutsAggregateResponse';
  count?: Maybe<WorkoutTypeWorkoutsCountAggregate>;
  min?: Maybe<WorkoutTypeWorkoutsMinAggregate>;
  max?: Maybe<WorkoutTypeWorkoutsMaxAggregate>;
};

export type ResultDeleteResponse = {
  __typename?: 'ResultDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type ResultCountAggregate = {
  __typename?: 'ResultCountAggregate';
  result?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
};

export type ResultSumAggregate = {
  __typename?: 'ResultSumAggregate';
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type ResultAvgAggregate = {
  __typename?: 'ResultAvgAggregate';
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type ResultMinAggregate = {
  __typename?: 'ResultMinAggregate';
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type ResultMaxAggregate = {
  __typename?: 'ResultMaxAggregate';
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type ResultAggregateResponse = {
  __typename?: 'ResultAggregateResponse';
  count?: Maybe<ResultCountAggregate>;
  sum?: Maybe<ResultSumAggregate>;
  avg?: Maybe<ResultAvgAggregate>;
  min?: Maybe<ResultMinAggregate>;
  max?: Maybe<ResultMaxAggregate>;
};

export type WorkoutDeleteResponse = {
  __typename?: 'WorkoutDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type WorkoutCountAggregate = {
  __typename?: 'WorkoutCountAggregate';
  name?: Maybe<Scalars['Int']>;
};

export type WorkoutMinAggregate = {
  __typename?: 'WorkoutMinAggregate';
  name?: Maybe<Scalars['String']>;
};

export type WorkoutMaxAggregate = {
  __typename?: 'WorkoutMaxAggregate';
  name?: Maybe<Scalars['String']>;
};

export type WorkoutAggregateResponse = {
  __typename?: 'WorkoutAggregateResponse';
  count?: Maybe<WorkoutCountAggregate>;
  min?: Maybe<WorkoutMinAggregate>;
  max?: Maybe<WorkoutMaxAggregate>;
};

export type WorkoutResultsCountAggregate = {
  __typename?: 'WorkoutResultsCountAggregate';
  result?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
};

export type WorkoutResultsSumAggregate = {
  __typename?: 'WorkoutResultsSumAggregate';
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type WorkoutResultsAvgAggregate = {
  __typename?: 'WorkoutResultsAvgAggregate';
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type WorkoutResultsMinAggregate = {
  __typename?: 'WorkoutResultsMinAggregate';
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type WorkoutResultsMaxAggregate = {
  __typename?: 'WorkoutResultsMaxAggregate';
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
};

export type WorkoutResultsAggregateResponse = {
  __typename?: 'WorkoutResultsAggregateResponse';
  count?: Maybe<WorkoutResultsCountAggregate>;
  sum?: Maybe<WorkoutResultsSumAggregate>;
  avg?: Maybe<WorkoutResultsAvgAggregate>;
  min?: Maybe<WorkoutResultsMinAggregate>;
  max?: Maybe<WorkoutResultsMaxAggregate>;
};

export type Admin = {
  __typename?: 'Admin';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type AdminDeleteResponse = {
  __typename?: 'AdminDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type AdminCountAggregate = {
  __typename?: 'AdminCountAggregate';
  name?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
};

export type AdminMinAggregate = {
  __typename?: 'AdminMinAggregate';
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type AdminMaxAggregate = {
  __typename?: 'AdminMaxAggregate';
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type AdminAggregateResponse = {
  __typename?: 'AdminAggregateResponse';
  count?: Maybe<AdminCountAggregate>;
  min?: Maybe<AdminMinAggregate>;
  max?: Maybe<AdminMaxAggregate>;
};

export type AuthType = {
  __typename?: 'AuthType';
  admin: Admin;
  token: Scalars['String'];
};

export type TokenValidType = {
  __typename?: 'TokenValidType';
  valid: Scalars['Boolean'];
};

export type CompetitionRankDeleteResponse = {
  __typename?: 'CompetitionRankDeleteResponse';
  id?: Maybe<Scalars['ID']>;
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CompetitionRankCountAggregate = {
  __typename?: 'CompetitionRankCountAggregate';
  rank?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
};

export type CompetitionRankSumAggregate = {
  __typename?: 'CompetitionRankSumAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CompetitionRankAvgAggregate = {
  __typename?: 'CompetitionRankAvgAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CompetitionRankMinAggregate = {
  __typename?: 'CompetitionRankMinAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CompetitionRankMaxAggregate = {
  __typename?: 'CompetitionRankMaxAggregate';
  rank?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
};

export type CompetitionRankAggregateResponse = {
  __typename?: 'CompetitionRankAggregateResponse';
  count?: Maybe<CompetitionRankCountAggregate>;
  sum?: Maybe<CompetitionRankSumAggregate>;
  avg?: Maybe<CompetitionRankAvgAggregate>;
  min?: Maybe<CompetitionRankMinAggregate>;
  max?: Maybe<CompetitionRankMaxAggregate>;
};

export type Query = {
  __typename?: 'Query';
  box?: Maybe<Box>;
  boxes: Array<Box>;
  boxAggregate: BoxAggregateResponse;
  athlete?: Maybe<Athlete>;
  athletes: Array<Athlete>;
  athleteAggregate: AthleteAggregateResponse;
  competition?: Maybe<Competition>;
  competitions: Array<Competition>;
  competitionAggregate: CompetitionAggregateResponse;
  category?: Maybe<Category>;
  categories: Array<Category>;
  categoryAggregate: CategoryAggregateResponse;
  workoutType?: Maybe<WorkoutType>;
  workoutTypes: Array<WorkoutType>;
  workoutTypeAggregate: WorkoutTypeAggregateResponse;
  result?: Maybe<Result>;
  results: Array<Result>;
  resultAggregate: ResultAggregateResponse;
  workout?: Maybe<Workout>;
  workouts: Array<Workout>;
  workoutAggregate: WorkoutAggregateResponse;
  admin?: Maybe<Admin>;
  admins: Array<Admin>;
  adminAggregate: AdminAggregateResponse;
  isTokenValid: TokenValidType;
  competitionRank?: Maybe<CompetitionRank>;
  competitionRanks: Array<CompetitionRank>;
  competitionRankAggregate: CompetitionRankAggregateResponse;
};


export type QueryBoxArgs = {
  id: Scalars['ID'];
};


export type QueryBoxesArgs = {
  filter?: Maybe<BoxFilter>;
  sorting?: Maybe<Array<BoxSort>>;
};


export type QueryBoxAggregateArgs = {
  filter?: Maybe<BoxAggregateFilter>;
};


export type QueryAthleteArgs = {
  id: Scalars['ID'];
};


export type QueryAthletesArgs = {
  filter?: Maybe<AthleteFilter>;
  sorting?: Maybe<Array<AthleteSort>>;
};


export type QueryAthleteAggregateArgs = {
  filter?: Maybe<AthleteAggregateFilter>;
};


export type QueryCompetitionArgs = {
  id: Scalars['ID'];
};


export type QueryCompetitionsArgs = {
  filter?: Maybe<CompetitionFilter>;
  sorting?: Maybe<Array<CompetitionSort>>;
};


export type QueryCompetitionAggregateArgs = {
  filter?: Maybe<CompetitionAggregateFilter>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryCategoriesArgs = {
  filter?: Maybe<CategoryFilter>;
  sorting?: Maybe<Array<CategorySort>>;
};


export type QueryCategoryAggregateArgs = {
  filter?: Maybe<CategoryAggregateFilter>;
};


export type QueryWorkoutTypeArgs = {
  id: Scalars['ID'];
};


export type QueryWorkoutTypesArgs = {
  filter?: Maybe<WorkoutTypeFilter>;
  sorting?: Maybe<Array<WorkoutTypeSort>>;
};


export type QueryWorkoutTypeAggregateArgs = {
  filter?: Maybe<WorkoutTypeAggregateFilter>;
};


export type QueryResultArgs = {
  id: Scalars['ID'];
};


export type QueryResultsArgs = {
  filter?: Maybe<ResultFilter>;
  sorting?: Maybe<Array<ResultSort>>;
};


export type QueryResultAggregateArgs = {
  filter?: Maybe<ResultAggregateFilter>;
};


export type QueryWorkoutArgs = {
  id: Scalars['ID'];
};


export type QueryWorkoutsArgs = {
  filter?: Maybe<WorkoutFilter>;
  sorting?: Maybe<Array<WorkoutSort>>;
};


export type QueryWorkoutAggregateArgs = {
  filter?: Maybe<WorkoutAggregateFilter>;
};


export type QueryAdminArgs = {
  id: Scalars['ID'];
};


export type QueryAdminsArgs = {
  filter?: Maybe<AdminFilter>;
  sorting?: Maybe<Array<AdminSort>>;
};


export type QueryAdminAggregateArgs = {
  filter?: Maybe<AdminAggregateFilter>;
};


export type QueryIsTokenValidArgs = {
  token: Scalars['String'];
};


export type QueryCompetitionRankArgs = {
  id: Scalars['ID'];
};


export type QueryCompetitionRanksArgs = {
  filter?: Maybe<CompetitionRankFilter>;
  sorting?: Maybe<Array<CompetitionRankSort>>;
};


export type QueryCompetitionRankAggregateArgs = {
  filter?: Maybe<CompetitionRankAggregateFilter>;
};

export type BoxFilter = {
  and?: Maybe<Array<BoxFilter>>;
  or?: Maybe<Array<BoxFilter>>;
  name?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
  athletes?: Maybe<BoxFilterAthleteFilter>;
};

export type BoxFilterAthleteFilter = {
  and?: Maybe<Array<BoxFilterAthleteFilter>>;
  or?: Maybe<Array<BoxFilterAthleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  firstname?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  birth?: Maybe<StringFieldComparison>;
  sex?: Maybe<StringFieldComparison>;
  cpf?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type BoxSort = {
  field: BoxSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum BoxSortFields {
  Name = 'name',
  City = 'city'
}

export type BoxAggregateFilter = {
  and?: Maybe<Array<BoxAggregateFilter>>;
  or?: Maybe<Array<BoxAggregateFilter>>;
  name?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
};

export type WorkoutTypeFilter = {
  and?: Maybe<Array<WorkoutTypeFilter>>;
  or?: Maybe<Array<WorkoutTypeFilter>>;
  name?: Maybe<StringFieldComparison>;
  workouts?: Maybe<WorkoutTypeFilterWorkoutFilter>;
};

export type WorkoutTypeFilterWorkoutFilter = {
  and?: Maybe<Array<WorkoutTypeFilterWorkoutFilter>>;
  or?: Maybe<Array<WorkoutTypeFilterWorkoutFilter>>;
  name?: Maybe<StringFieldComparison>;
};

export type WorkoutTypeSort = {
  field: WorkoutTypeSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum WorkoutTypeSortFields {
  Name = 'name'
}

export type WorkoutTypeAggregateFilter = {
  and?: Maybe<Array<WorkoutTypeAggregateFilter>>;
  or?: Maybe<Array<WorkoutTypeAggregateFilter>>;
  name?: Maybe<StringFieldComparison>;
};

export type AdminFilter = {
  and?: Maybe<Array<AdminFilter>>;
  or?: Maybe<Array<AdminFilter>>;
  name?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type AdminSort = {
  field: AdminSortFields;
  direction: SortDirection;
  nulls?: Maybe<SortNulls>;
};

export enum AdminSortFields {
  Name = 'name',
  Email = 'email'
}

export type AdminAggregateFilter = {
  and?: Maybe<Array<AdminAggregateFilter>>;
  or?: Maybe<Array<AdminAggregateFilter>>;
  name?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteOneBox: BoxDeleteResponse;
  deleteManyBoxes: DeleteManyResponse;
  updateOneBox: Box;
  updateManyBoxes: UpdateManyResponse;
  createOneBox: Box;
  createManyBoxes: Array<Box>;
  removeAthletesFromBox: Box;
  addAthletesToBox: Box;
  deleteOneAthlete: AthleteDeleteResponse;
  deleteManyAthletes: DeleteManyResponse;
  updateOneAthlete: Athlete;
  updateManyAthletes: UpdateManyResponse;
  createOneAthlete: Athlete;
  createManyAthletes: Array<Athlete>;
  removeCompetitionRanksFromAthlete: Athlete;
  removeCompetitionsFromAthlete: Athlete;
  removeResultsFromAthlete: Athlete;
  removeBoxFromAthlete: Athlete;
  removeCategoryFromAthlete: Athlete;
  addCompetitionRanksToAthlete: Athlete;
  addCompetitionsToAthlete: Athlete;
  addResultsToAthlete: Athlete;
  setBoxOnAthlete: Athlete;
  setCategoryOnAthlete: Athlete;
  deleteOneCompetition: CompetitionDeleteResponse;
  deleteManyCompetitions: DeleteManyResponse;
  updateOneCompetition: Competition;
  updateManyCompetitions: UpdateManyResponse;
  createOneCompetition: Competition;
  createManyCompetitions: Array<Competition>;
  removeCompetitionRanksFromCompetition: Competition;
  removeCategoriesFromCompetition: Competition;
  removeAthletesFromCompetition: Competition;
  removeWorkoutsFromCompetition: Competition;
  addCompetitionRanksToCompetition: Competition;
  addCategoriesToCompetition: Competition;
  addAthletesToCompetition: Competition;
  addWorkoutsToCompetition: Competition;
  deleteOneCategory: CategoryDeleteResponse;
  deleteManyCategories: DeleteManyResponse;
  updateOneCategory: Category;
  updateManyCategories: UpdateManyResponse;
  createOneCategory: Category;
  createManyCategories: Array<Category>;
  removeCompetitionsFromCategory: Category;
  removeWorkoutsFromCategory: Category;
  removeCompetitionRanksFromCategory: Category;
  removeAthletesFromCategory: Category;
  addCompetitionsToCategory: Category;
  addWorkoutsToCategory: Category;
  addCompetitionRanksToCategory: Category;
  addAthletesToCategory: Category;
  deleteOneWorkoutType: WorkoutTypeDeleteResponse;
  deleteManyWorkoutTypes: DeleteManyResponse;
  updateOneWorkoutType: WorkoutType;
  updateManyWorkoutTypes: UpdateManyResponse;
  createOneWorkoutType: WorkoutType;
  createManyWorkoutTypes: Array<WorkoutType>;
  removeWorkoutsFromWorkoutType: WorkoutType;
  addWorkoutsToWorkoutType: WorkoutType;
  deleteOneResult: ResultDeleteResponse;
  deleteManyResults: DeleteManyResponse;
  updateOneResult: Result;
  updateManyResults: UpdateManyResponse;
  createOneResult: Result;
  createManyResults: Array<Result>;
  removeAthleteFromResult: Result;
  removeWorkoutFromResult: Result;
  setAthleteOnResult: Result;
  setWorkoutOnResult: Result;
  deleteOneWorkout: WorkoutDeleteResponse;
  deleteManyWorkouts: DeleteManyResponse;
  updateOneWorkout: Workout;
  updateManyWorkouts: UpdateManyResponse;
  createOneWorkout: Workout;
  createManyWorkouts: Array<Workout>;
  removeResultsFromWorkout: Workout;
  removeCompetitionFromWorkout: Workout;
  removeWorkoutTypeFromWorkout: Workout;
  removeCategoryFromWorkout: Workout;
  addResultsToWorkout: Workout;
  setCompetitionOnWorkout: Workout;
  setWorkoutTypeOnWorkout: Workout;
  setCategoryOnWorkout: Workout;
  createUserByAdmin: Admin;
  deleteOneAdmin: AdminDeleteResponse;
  deleteManyAdmins: DeleteManyResponse;
  updateOneAdmin: Admin;
  updateManyAdmins: UpdateManyResponse;
  createOneAdmin: Admin;
  createManyAdmins: Array<Admin>;
  login: AuthType;
  deleteOneCompetitionRank: CompetitionRankDeleteResponse;
  deleteManyCompetitionRanks: DeleteManyResponse;
  updateOneCompetitionRank: CompetitionRank;
  updateManyCompetitionRanks: UpdateManyResponse;
  createOneCompetitionRank: CompetitionRank;
  createManyCompetitionRanks: Array<CompetitionRank>;
  removeCompetitionFromCompetitionRank: CompetitionRank;
  removeCategoryFromCompetitionRank: CompetitionRank;
  removeAthleteFromCompetitionRank: CompetitionRank;
  setCompetitionOnCompetitionRank: CompetitionRank;
  setCategoryOnCompetitionRank: CompetitionRank;
  setAthleteOnCompetitionRank: CompetitionRank;
};


export type MutationDeleteOneBoxArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyBoxesArgs = {
  input: DeleteManyBoxesInput;
};


export type MutationUpdateOneBoxArgs = {
  input: UpdateOneBoxInput;
};


export type MutationUpdateManyBoxesArgs = {
  input: UpdateManyBoxesInput;
};


export type MutationCreateOneBoxArgs = {
  input: CreateOneBoxInput;
};


export type MutationCreateManyBoxesArgs = {
  input: CreateManyBoxesInput;
};


export type MutationRemoveAthletesFromBoxArgs = {
  input: RelationsInput;
};


export type MutationAddAthletesToBoxArgs = {
  input: RelationsInput;
};


export type MutationDeleteOneAthleteArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyAthletesArgs = {
  input: DeleteManyAthletesInput;
};


export type MutationUpdateOneAthleteArgs = {
  input: UpdateOneAthleteInput;
};


export type MutationUpdateManyAthletesArgs = {
  input: UpdateManyAthletesInput;
};


export type MutationCreateOneAthleteArgs = {
  input: CreateOneAthleteInput;
};


export type MutationCreateManyAthletesArgs = {
  input: CreateManyAthletesInput;
};


export type MutationRemoveCompetitionRanksFromAthleteArgs = {
  input: RelationsInput;
};


export type MutationRemoveCompetitionsFromAthleteArgs = {
  input: RelationsInput;
};


export type MutationRemoveResultsFromAthleteArgs = {
  input: RelationsInput;
};


export type MutationRemoveBoxFromAthleteArgs = {
  input: RelationInput;
};


export type MutationRemoveCategoryFromAthleteArgs = {
  input: RelationInput;
};


export type MutationAddCompetitionRanksToAthleteArgs = {
  input: RelationsInput;
};


export type MutationAddCompetitionsToAthleteArgs = {
  input: RelationsInput;
};


export type MutationAddResultsToAthleteArgs = {
  input: RelationsInput;
};


export type MutationSetBoxOnAthleteArgs = {
  input: RelationInput;
};


export type MutationSetCategoryOnAthleteArgs = {
  input: RelationInput;
};


export type MutationDeleteOneCompetitionArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyCompetitionsArgs = {
  input: DeleteManyCompetitionsInput;
};


export type MutationUpdateOneCompetitionArgs = {
  input: UpdateOneCompetitionInput;
};


export type MutationUpdateManyCompetitionsArgs = {
  input: UpdateManyCompetitionsInput;
};


export type MutationCreateOneCompetitionArgs = {
  input: CreateOneCompetitionInput;
};


export type MutationCreateManyCompetitionsArgs = {
  input: CreateManyCompetitionsInput;
};


export type MutationRemoveCompetitionRanksFromCompetitionArgs = {
  input: RelationsInput;
};


export type MutationRemoveCategoriesFromCompetitionArgs = {
  input: RelationsInput;
};


export type MutationRemoveAthletesFromCompetitionArgs = {
  input: RelationsInput;
};


export type MutationRemoveWorkoutsFromCompetitionArgs = {
  input: RelationsInput;
};


export type MutationAddCompetitionRanksToCompetitionArgs = {
  input: RelationsInput;
};


export type MutationAddCategoriesToCompetitionArgs = {
  input: RelationsInput;
};


export type MutationAddAthletesToCompetitionArgs = {
  input: RelationsInput;
};


export type MutationAddWorkoutsToCompetitionArgs = {
  input: RelationsInput;
};


export type MutationDeleteOneCategoryArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyCategoriesArgs = {
  input: DeleteManyCategoriesInput;
};


export type MutationUpdateOneCategoryArgs = {
  input: UpdateOneCategoryInput;
};


export type MutationUpdateManyCategoriesArgs = {
  input: UpdateManyCategoriesInput;
};


export type MutationCreateOneCategoryArgs = {
  input: CreateOneCategoryInput;
};


export type MutationCreateManyCategoriesArgs = {
  input: CreateManyCategoriesInput;
};


export type MutationRemoveCompetitionsFromCategoryArgs = {
  input: RelationsInput;
};


export type MutationRemoveWorkoutsFromCategoryArgs = {
  input: RelationsInput;
};


export type MutationRemoveCompetitionRanksFromCategoryArgs = {
  input: RelationsInput;
};


export type MutationRemoveAthletesFromCategoryArgs = {
  input: RelationsInput;
};


export type MutationAddCompetitionsToCategoryArgs = {
  input: RelationsInput;
};


export type MutationAddWorkoutsToCategoryArgs = {
  input: RelationsInput;
};


export type MutationAddCompetitionRanksToCategoryArgs = {
  input: RelationsInput;
};


export type MutationAddAthletesToCategoryArgs = {
  input: RelationsInput;
};


export type MutationDeleteOneWorkoutTypeArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyWorkoutTypesArgs = {
  input: DeleteManyWorkoutTypesInput;
};


export type MutationUpdateOneWorkoutTypeArgs = {
  input: UpdateOneWorkoutTypeInput;
};


export type MutationUpdateManyWorkoutTypesArgs = {
  input: UpdateManyWorkoutTypesInput;
};


export type MutationCreateOneWorkoutTypeArgs = {
  input: CreateOneWorkoutTypeInput;
};


export type MutationCreateManyWorkoutTypesArgs = {
  input: CreateManyWorkoutTypesInput;
};


export type MutationRemoveWorkoutsFromWorkoutTypeArgs = {
  input: RelationsInput;
};


export type MutationAddWorkoutsToWorkoutTypeArgs = {
  input: RelationsInput;
};


export type MutationDeleteOneResultArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyResultsArgs = {
  input: DeleteManyResultsInput;
};


export type MutationUpdateOneResultArgs = {
  input: UpdateOneResultInput;
};


export type MutationUpdateManyResultsArgs = {
  input: UpdateManyResultsInput;
};


export type MutationCreateOneResultArgs = {
  input: CreateOneResultInput;
};


export type MutationCreateManyResultsArgs = {
  input: CreateManyResultsInput;
};


export type MutationRemoveAthleteFromResultArgs = {
  input: RelationInput;
};


export type MutationRemoveWorkoutFromResultArgs = {
  input: RelationInput;
};


export type MutationSetAthleteOnResultArgs = {
  input: RelationInput;
};


export type MutationSetWorkoutOnResultArgs = {
  input: RelationInput;
};


export type MutationDeleteOneWorkoutArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyWorkoutsArgs = {
  input: DeleteManyWorkoutsInput;
};


export type MutationUpdateOneWorkoutArgs = {
  input: UpdateOneWorkoutInput;
};


export type MutationUpdateManyWorkoutsArgs = {
  input: UpdateManyWorkoutsInput;
};


export type MutationCreateOneWorkoutArgs = {
  input: CreateOneWorkoutInput;
};


export type MutationCreateManyWorkoutsArgs = {
  input: CreateManyWorkoutsInput;
};


export type MutationRemoveResultsFromWorkoutArgs = {
  input: RelationsInput;
};


export type MutationRemoveCompetitionFromWorkoutArgs = {
  input: RelationInput;
};


export type MutationRemoveWorkoutTypeFromWorkoutArgs = {
  input: RelationInput;
};


export type MutationRemoveCategoryFromWorkoutArgs = {
  input: RelationInput;
};


export type MutationAddResultsToWorkoutArgs = {
  input: RelationsInput;
};


export type MutationSetCompetitionOnWorkoutArgs = {
  input: RelationInput;
};


export type MutationSetWorkoutTypeOnWorkoutArgs = {
  input: RelationInput;
};


export type MutationSetCategoryOnWorkoutArgs = {
  input: RelationInput;
};


export type MutationCreateUserByAdminArgs = {
  data?: Maybe<AdminInput>;
};


export type MutationDeleteOneAdminArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyAdminsArgs = {
  input: DeleteManyAdminsInput;
};


export type MutationUpdateOneAdminArgs = {
  input: UpdateOneAdminInput;
};


export type MutationUpdateManyAdminsArgs = {
  input: UpdateManyAdminsInput;
};


export type MutationCreateOneAdminArgs = {
  input: CreateOneAdminInput;
};


export type MutationCreateManyAdminsArgs = {
  input: CreateManyAdminsInput;
};


export type MutationLoginArgs = {
  data: AuthInput;
};


export type MutationDeleteOneCompetitionRankArgs = {
  input: DeleteOneInput;
};


export type MutationDeleteManyCompetitionRanksArgs = {
  input: DeleteManyCompetitionRanksInput;
};


export type MutationUpdateOneCompetitionRankArgs = {
  input: UpdateOneCompetitionRankInput;
};


export type MutationUpdateManyCompetitionRanksArgs = {
  input: UpdateManyCompetitionRanksInput;
};


export type MutationCreateOneCompetitionRankArgs = {
  input: CreateOneCompetitionRankInput;
};


export type MutationCreateManyCompetitionRanksArgs = {
  input: CreateManyCompetitionRanksInput;
};


export type MutationRemoveCompetitionFromCompetitionRankArgs = {
  input: RelationInput;
};


export type MutationRemoveCategoryFromCompetitionRankArgs = {
  input: RelationInput;
};


export type MutationRemoveAthleteFromCompetitionRankArgs = {
  input: RelationInput;
};


export type MutationSetCompetitionOnCompetitionRankArgs = {
  input: RelationInput;
};


export type MutationSetCategoryOnCompetitionRankArgs = {
  input: RelationInput;
};


export type MutationSetAthleteOnCompetitionRankArgs = {
  input: RelationInput;
};

export type DeleteOneInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteManyBoxesInput = {
  /** Filter to find records to delete */
  filter: BoxDeleteFilter;
};

export type BoxDeleteFilter = {
  and?: Maybe<Array<BoxDeleteFilter>>;
  or?: Maybe<Array<BoxDeleteFilter>>;
  name?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
};

export type UpdateOneBoxInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateBoxInput;
};

export type UpdateBoxInput = {
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type UpdateManyBoxesInput = {
  /** Filter used to find fields to update */
  filter: BoxUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateBoxInput;
};

export type BoxUpdateFilter = {
  and?: Maybe<Array<BoxUpdateFilter>>;
  or?: Maybe<Array<BoxUpdateFilter>>;
  name?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
};

export type CreateOneBoxInput = {
  /** The record to create */
  box: CreateBoxInput;
};

export type CreateBoxInput = {
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
};

export type CreateManyBoxesInput = {
  /** Array of records to create */
  boxes: Array<CreateBoxInput>;
};

export type RelationsInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type DeleteManyAthletesInput = {
  /** Filter to find records to delete */
  filter: AthleteDeleteFilter;
};

export type AthleteDeleteFilter = {
  and?: Maybe<Array<AthleteDeleteFilter>>;
  or?: Maybe<Array<AthleteDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  firstname?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  birth?: Maybe<StringFieldComparison>;
  sex?: Maybe<StringFieldComparison>;
  cpf?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type UpdateOneAthleteInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateAthleteInput;
};

export type UpdateAthleteInput = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  birth?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  box?: Maybe<UpdateBoxInput>;
  category?: Maybe<UpdateCategoryInput>;
  id?: Maybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type UpdateManyAthletesInput = {
  /** Filter used to find fields to update */
  filter: AthleteUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateAthleteInput;
};

export type AthleteUpdateFilter = {
  and?: Maybe<Array<AthleteUpdateFilter>>;
  or?: Maybe<Array<AthleteUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  firstname?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  birth?: Maybe<StringFieldComparison>;
  sex?: Maybe<StringFieldComparison>;
  cpf?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type CreateOneAthleteInput = {
  /** The record to create */
  athlete: AthleteInput;
};

export type AthleteInput = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  birth?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  box?: Maybe<UpdateBoxInput>;
  category?: Maybe<UpdateCategoryInput>;
};

export type CreateManyAthletesInput = {
  /** Array of records to create */
  athletes: Array<AthleteInput>;
};

export type RelationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type DeleteManyCompetitionsInput = {
  /** Filter to find records to delete */
  filter: CompetitionDeleteFilter;
};

export type CompetitionDeleteFilter = {
  and?: Maybe<Array<CompetitionDeleteFilter>>;
  or?: Maybe<Array<CompetitionDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  season?: Maybe<NumberFieldComparison>;
  date?: Maybe<StringFieldComparison>;
  place?: Maybe<StringFieldComparison>;
  weight?: Maybe<NumberFieldComparison>;
};

export type UpdateOneCompetitionInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCompetitionInput;
};

export type UpdateCompetitionInput = {
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<AttachCategoryInput>>;
  id?: Maybe<Scalars['String']>;
};

export type AttachCategoryInput = {
  id: Scalars['ID'];
};

export type UpdateManyCompetitionsInput = {
  /** Filter used to find fields to update */
  filter: CompetitionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCompetitionInput;
};

export type CompetitionUpdateFilter = {
  and?: Maybe<Array<CompetitionUpdateFilter>>;
  or?: Maybe<Array<CompetitionUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
  season?: Maybe<NumberFieldComparison>;
  date?: Maybe<StringFieldComparison>;
  place?: Maybe<StringFieldComparison>;
  weight?: Maybe<NumberFieldComparison>;
};

export type CreateOneCompetitionInput = {
  /** The record to create */
  competition: CompetitionInput;
};

export type CompetitionInput = {
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<AttachCategoryInput>>;
};

export type CreateManyCompetitionsInput = {
  /** Array of records to create */
  competitions: Array<CompetitionInput>;
};

export type DeleteManyCategoriesInput = {
  /** Filter to find records to delete */
  filter: CategoryDeleteFilter;
};

export type CategoryDeleteFilter = {
  and?: Maybe<Array<CategoryDeleteFilter>>;
  or?: Maybe<Array<CategoryDeleteFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type UpdateOneCategoryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCategoryInput;
};

export type UpdateManyCategoriesInput = {
  /** Filter used to find fields to update */
  filter: CategoryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCategoryInput;
};

export type CategoryUpdateFilter = {
  and?: Maybe<Array<CategoryUpdateFilter>>;
  or?: Maybe<Array<CategoryUpdateFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type CreateOneCategoryInput = {
  /** The record to create */
  category: CreateCategoryInput;
};

export type CreateCategoryInput = {
  name?: Maybe<Scalars['String']>;
};

export type CreateManyCategoriesInput = {
  /** Array of records to create */
  categories: Array<CreateCategoryInput>;
};

export type DeleteManyWorkoutTypesInput = {
  /** Filter to find records to delete */
  filter: WorkoutTypeDeleteFilter;
};

export type WorkoutTypeDeleteFilter = {
  and?: Maybe<Array<WorkoutTypeDeleteFilter>>;
  or?: Maybe<Array<WorkoutTypeDeleteFilter>>;
  name?: Maybe<StringFieldComparison>;
};

export type UpdateOneWorkoutTypeInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateWorkoutTypeInput;
};

export type UpdateWorkoutTypeInput = {
  name?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type UpdateManyWorkoutTypesInput = {
  /** Filter used to find fields to update */
  filter: WorkoutTypeUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateWorkoutTypeInput;
};

export type WorkoutTypeUpdateFilter = {
  and?: Maybe<Array<WorkoutTypeUpdateFilter>>;
  or?: Maybe<Array<WorkoutTypeUpdateFilter>>;
  name?: Maybe<StringFieldComparison>;
};

export type CreateOneWorkoutTypeInput = {
  /** The record to create */
  workoutType: WorkoutTypeInput;
};

export type WorkoutTypeInput = {
  name: Scalars['String'];
};

export type CreateManyWorkoutTypesInput = {
  /** Array of records to create */
  workoutTypes: Array<WorkoutTypeInput>;
};

export type DeleteManyResultsInput = {
  /** Filter to find records to delete */
  filter: ResultDeleteFilter;
};

export type ResultDeleteFilter = {
  and?: Maybe<Array<ResultDeleteFilter>>;
  or?: Maybe<Array<ResultDeleteFilter>>;
  result?: Maybe<NumberFieldComparison>;
  rank?: Maybe<NumberFieldComparison>;
};

export type UpdateOneResultInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateResultInput;
};

export type UpdateResultInput = {
  result?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  workout?: Maybe<UpdateWorkoutInput>;
  athlete?: Maybe<UpdateAthleteInput>;
  id?: Maybe<Scalars['String']>;
};

export type UpdateWorkoutInput = {
  name?: Maybe<Scalars['String']>;
  cap?: Maybe<Scalars['Float']>;
  workoutType?: Maybe<UpdateWorkoutTypeInput>;
  category?: Maybe<UpdateCategoryInput>;
  competition?: Maybe<UpdateCompetitionInput>;
  id?: Maybe<Scalars['String']>;
};

export type UpdateManyResultsInput = {
  /** Filter used to find fields to update */
  filter: ResultUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateResultInput;
};

export type ResultUpdateFilter = {
  and?: Maybe<Array<ResultUpdateFilter>>;
  or?: Maybe<Array<ResultUpdateFilter>>;
  result?: Maybe<NumberFieldComparison>;
  rank?: Maybe<NumberFieldComparison>;
};

export type CreateOneResultInput = {
  /** The record to create */
  result: ResultInput;
};

export type ResultInput = {
  result: Scalars['Float'];
  rank?: Maybe<Scalars['Float']>;
  workout?: Maybe<UpdateWorkoutInput>;
  athlete?: Maybe<UpdateAthleteInput>;
};

export type CreateManyResultsInput = {
  /** Array of records to create */
  results: Array<ResultInput>;
};

export type DeleteManyWorkoutsInput = {
  /** Filter to find records to delete */
  filter: WorkoutDeleteFilter;
};

export type WorkoutDeleteFilter = {
  and?: Maybe<Array<WorkoutDeleteFilter>>;
  or?: Maybe<Array<WorkoutDeleteFilter>>;
  name?: Maybe<StringFieldComparison>;
};

export type UpdateOneWorkoutInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateWorkoutInput;
};

export type UpdateManyWorkoutsInput = {
  /** Filter used to find fields to update */
  filter: WorkoutUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateWorkoutInput;
};

export type WorkoutUpdateFilter = {
  and?: Maybe<Array<WorkoutUpdateFilter>>;
  or?: Maybe<Array<WorkoutUpdateFilter>>;
  name?: Maybe<StringFieldComparison>;
};

export type CreateOneWorkoutInput = {
  /** The record to create */
  workout: WorkoutInput;
};

export type WorkoutInput = {
  name?: Maybe<Scalars['String']>;
  cap?: Maybe<Scalars['Float']>;
  workoutType?: Maybe<UpdateWorkoutTypeInput>;
  category?: Maybe<UpdateCategoryInput>;
  competition?: Maybe<UpdateCompetitionInput>;
};

export type CreateManyWorkoutsInput = {
  /** Array of records to create */
  workouts: Array<WorkoutInput>;
};

export type AdminInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type DeleteManyAdminsInput = {
  /** Filter to find records to delete */
  filter: AdminDeleteFilter;
};

export type AdminDeleteFilter = {
  and?: Maybe<Array<AdminDeleteFilter>>;
  or?: Maybe<Array<AdminDeleteFilter>>;
  name?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type UpdateOneAdminInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateAdminInput;
};

export type UpdateAdminInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type UpdateManyAdminsInput = {
  /** Filter used to find fields to update */
  filter: AdminUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateAdminInput;
};

export type AdminUpdateFilter = {
  and?: Maybe<Array<AdminUpdateFilter>>;
  or?: Maybe<Array<AdminUpdateFilter>>;
  name?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type CreateOneAdminInput = {
  /** The record to create */
  admin: AdminInput;
};

export type CreateManyAdminsInput = {
  /** Array of records to create */
  admins: Array<AdminInput>;
};

export type AuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type DeleteManyCompetitionRanksInput = {
  /** Filter to find records to delete */
  filter: CompetitionRankDeleteFilter;
};

export type CompetitionRankDeleteFilter = {
  and?: Maybe<Array<CompetitionRankDeleteFilter>>;
  or?: Maybe<Array<CompetitionRankDeleteFilter>>;
  rank?: Maybe<NumberFieldComparison>;
  points?: Maybe<NumberFieldComparison>;
};

export type UpdateOneCompetitionRankInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCompetitionRankInput;
};

export type UpdateCompetitionRankInput = {
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  competition?: Maybe<UpdateCompetitionInput>;
  category?: Maybe<UpdateCategoryInput>;
  athlete?: Maybe<UpdateAthleteInput>;
  id?: Maybe<Scalars['String']>;
};

export type UpdateManyCompetitionRanksInput = {
  /** Filter used to find fields to update */
  filter: CompetitionRankUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCompetitionRankInput;
};

export type CompetitionRankUpdateFilter = {
  and?: Maybe<Array<CompetitionRankUpdateFilter>>;
  or?: Maybe<Array<CompetitionRankUpdateFilter>>;
  rank?: Maybe<NumberFieldComparison>;
  points?: Maybe<NumberFieldComparison>;
};

export type CreateOneCompetitionRankInput = {
  /** The record to create */
  competitionRank: CompetitionRankInput;
};

export type CompetitionRankInput = {
  points: Scalars['Float'];
  rank?: Maybe<Scalars['Float']>;
  competition?: Maybe<UpdateCompetitionInput>;
  category?: Maybe<UpdateCategoryInput>;
  athlete?: Maybe<UpdateAthleteInput>;
};

export type CreateManyCompetitionRanksInput = {
  /** Array of records to create */
  competitionRanks: Array<CompetitionRankInput>;
};

export type Subscription = {
  __typename?: 'Subscription';
  deletedOneBox: BoxDeleteResponse;
  deletedManyBoxes: DeleteManyResponse;
  updatedOneBox: Box;
  updatedManyBoxes: UpdateManyResponse;
  createdBox: Box;
  deletedOneAthlete: AthleteDeleteResponse;
  deletedManyAthletes: DeleteManyResponse;
  updatedOneAthlete: Athlete;
  updatedManyAthletes: UpdateManyResponse;
  createdAthlete: Athlete;
  deletedOneCategory: CategoryDeleteResponse;
  deletedManyCategories: DeleteManyResponse;
  updatedOneCategory: Category;
  updatedManyCategories: UpdateManyResponse;
  createdCategory: Category;
  deletedOneAdmin: AdminDeleteResponse;
  deletedManyAdmins: DeleteManyResponse;
  updatedOneAdmin: Admin;
  updatedManyAdmins: UpdateManyResponse;
  createdAdmin: Admin;
};


export type SubscriptionDeletedOneBoxArgs = {
  input?: Maybe<DeleteOneBoxSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneBoxArgs = {
  input?: Maybe<UpdateOneBoxSubscriptionFilterInput>;
};


export type SubscriptionCreatedBoxArgs = {
  input?: Maybe<CreateBoxSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneAthleteArgs = {
  input?: Maybe<DeleteOneAthleteSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneAthleteArgs = {
  input?: Maybe<UpdateOneAthleteSubscriptionFilterInput>;
};


export type SubscriptionCreatedAthleteArgs = {
  input?: Maybe<CreateAthleteSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneCategoryArgs = {
  input?: Maybe<DeleteOneCategorySubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneCategoryArgs = {
  input?: Maybe<UpdateOneCategorySubscriptionFilterInput>;
};


export type SubscriptionCreatedCategoryArgs = {
  input?: Maybe<CreateCategorySubscriptionFilterInput>;
};


export type SubscriptionDeletedOneAdminArgs = {
  input?: Maybe<DeleteOneAdminSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneAdminArgs = {
  input?: Maybe<UpdateOneAdminSubscriptionFilterInput>;
};


export type SubscriptionCreatedAdminArgs = {
  input?: Maybe<CreateAdminSubscriptionFilterInput>;
};

export type DeleteOneBoxSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: BoxSubscriptionFilter;
};

export type BoxSubscriptionFilter = {
  and?: Maybe<Array<BoxSubscriptionFilter>>;
  or?: Maybe<Array<BoxSubscriptionFilter>>;
  name?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
};

export type UpdateOneBoxSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: BoxSubscriptionFilter;
};

export type CreateBoxSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: BoxSubscriptionFilter;
};

export type DeleteOneAthleteSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: AthleteSubscriptionFilter;
};

export type AthleteSubscriptionFilter = {
  and?: Maybe<Array<AthleteSubscriptionFilter>>;
  or?: Maybe<Array<AthleteSubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  firstname?: Maybe<StringFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  birth?: Maybe<StringFieldComparison>;
  sex?: Maybe<StringFieldComparison>;
  cpf?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type UpdateOneAthleteSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: AthleteSubscriptionFilter;
};

export type CreateAthleteSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: AthleteSubscriptionFilter;
};

export type DeleteOneCategorySubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CategorySubscriptionFilter;
};

export type CategorySubscriptionFilter = {
  and?: Maybe<Array<CategorySubscriptionFilter>>;
  or?: Maybe<Array<CategorySubscriptionFilter>>;
  id?: Maybe<IdFilterComparison>;
  name?: Maybe<StringFieldComparison>;
};

export type UpdateOneCategorySubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CategorySubscriptionFilter;
};

export type CreateCategorySubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: CategorySubscriptionFilter;
};

export type DeleteOneAdminSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: AdminSubscriptionFilter;
};

export type AdminSubscriptionFilter = {
  and?: Maybe<Array<AdminSubscriptionFilter>>;
  or?: Maybe<Array<AdminSubscriptionFilter>>;
  name?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
};

export type UpdateOneAdminSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: AdminSubscriptionFilter;
};

export type CreateAdminSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: AdminSubscriptionFilter;
};

export type SelectBoxesQueryVariables = Exact<{ [key: string]: never; }>;


export type SelectBoxesQuery = (
  { __typename?: 'Query' }
  & { boxes: Array<(
    { __typename?: 'Box' }
    & Pick<Box, 'id' | 'name'>
  )> }
);

export type SelectCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type SelectCategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
  )> }
);

export type SelectCompetitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SelectCompetitionsQuery = (
  { __typename?: 'Query' }
  & { competitions: Array<(
    { __typename?: 'Competition' }
    & Pick<Competition, 'id' | 'name' | 'season'>
  )> }
);

export type SelectFilteredCategoriesByCompetitionQueryVariables = Exact<{
  filter?: Maybe<CategoryFilter>;
}>;


export type SelectFilteredCategoriesByCompetitionQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
  )> }
);

export type SelectFilteredCompetitionsBySeasonQueryVariables = Exact<{
  filter?: Maybe<CompetitionFilter>;
}>;


export type SelectFilteredCompetitionsBySeasonQuery = (
  { __typename?: 'Query' }
  & { competitions: Array<(
    { __typename?: 'Competition' }
    & Pick<Competition, 'id' | 'name'>
  )> }
);

export type CreateOneAdminMutationVariables = Exact<{
  input: CreateOneAdminInput;
}>;


export type CreateOneAdminMutation = (
  { __typename?: 'Mutation' }
  & { createOneAdmin: (
    { __typename?: 'Admin' }
    & Pick<Admin, 'id'>
  ) }
);

export type GetAdminByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAdminByIdQuery = (
  { __typename?: 'Query' }
  & { admin?: Maybe<(
    { __typename?: 'Admin' }
    & Pick<Admin, 'id' | 'name' | 'email'>
  )> }
);

export type ListAdminsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAdminsQuery = (
  { __typename?: 'Query' }
  & { admins: Array<(
    { __typename?: 'Admin' }
    & Pick<Admin, 'id' | 'name' | 'email'>
  )> }
);

export type UpdateOneAdminMutationVariables = Exact<{
  input: UpdateOneAdminInput;
}>;


export type UpdateOneAdminMutation = (
  { __typename?: 'Mutation' }
  & { updateOneAdmin: (
    { __typename?: 'Admin' }
    & Pick<Admin, 'id'>
  ) }
);

export type AddCompetitionsToAthleteMutationVariables = Exact<{
  input: RelationsInput;
}>;


export type AddCompetitionsToAthleteMutation = (
  { __typename?: 'Mutation' }
  & { addCompetitionsToAthlete: (
    { __typename?: 'Athlete' }
    & Pick<Athlete, 'id'>
  ) }
);

export type CreateOneAthleteMutationVariables = Exact<{
  input: CreateOneAthleteInput;
}>;


export type CreateOneAthleteMutation = (
  { __typename?: 'Mutation' }
  & { createOneAthlete: (
    { __typename?: 'Athlete' }
    & Pick<Athlete, 'id'>
  ) }
);

export type DeleteOneAthleteMutationVariables = Exact<{
  input: DeleteOneInput;
}>;


export type DeleteOneAthleteMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneAthlete: (
    { __typename?: 'AthleteDeleteResponse' }
    & Pick<AthleteDeleteResponse, 'id'>
  ) }
);

export type GetAthleteByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAthleteByIdQuery = (
  { __typename?: 'Query' }
  & { athlete?: Maybe<(
    { __typename?: 'Athlete' }
    & Pick<Athlete, 'id' | 'firstname' | 'lastname'>
    & { category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )>, box?: Maybe<(
      { __typename?: 'Box' }
      & Pick<Box, 'id' | 'name'>
    )>, competitions?: Maybe<Array<(
      { __typename?: 'Competition' }
      & Pick<Competition, 'id' | 'name' | 'season'>
    )>> }
  )> }
);

export type ListAthletesAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAthletesAdminQuery = (
  { __typename?: 'Query' }
  & { athletes: Array<(
    { __typename?: 'Athlete' }
    & Pick<Athlete, 'id' | 'firstname' | 'lastname'>
    & { competitions?: Maybe<Array<(
      { __typename?: 'Competition' }
      & Pick<Competition, 'id' | 'name' | 'season'>
    )>>, box?: Maybe<(
      { __typename?: 'Box' }
      & Pick<Box, 'id' | 'name' | 'city' | 'logo'>
    )>, category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )> }
  )> }
);

export type RemoveCompetitionsFromAthleteMutationVariables = Exact<{
  input: RelationsInput;
}>;


export type RemoveCompetitionsFromAthleteMutation = (
  { __typename?: 'Mutation' }
  & { removeCompetitionsFromAthlete: (
    { __typename?: 'Athlete' }
    & Pick<Athlete, 'id'>
  ) }
);

export type UpdateOneAthleteMutationVariables = Exact<{
  input: UpdateOneAthleteInput;
}>;


export type UpdateOneAthleteMutation = (
  { __typename?: 'Mutation' }
  & { updateOneAthlete: (
    { __typename?: 'Athlete' }
    & Pick<Athlete, 'id'>
  ) }
);

export type CreateOneBoxMutationVariables = Exact<{
  input: CreateOneBoxInput;
}>;


export type CreateOneBoxMutation = (
  { __typename?: 'Mutation' }
  & { createOneBox: (
    { __typename?: 'Box' }
    & Pick<Box, 'id'>
  ) }
);

export type DeleteOneBoxMutationVariables = Exact<{
  input: DeleteOneInput;
}>;


export type DeleteOneBoxMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneBox: (
    { __typename?: 'BoxDeleteResponse' }
    & Pick<BoxDeleteResponse, 'id'>
  ) }
);

export type GetBoxByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBoxByIdQuery = (
  { __typename?: 'Query' }
  & { box?: Maybe<(
    { __typename?: 'Box' }
    & Pick<Box, 'id' | 'name' | 'logo' | 'city'>
  )> }
);

export type ListBoxesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListBoxesQuery = (
  { __typename?: 'Query' }
  & { boxes: Array<(
    { __typename?: 'Box' }
    & Pick<Box, 'id' | 'name' | 'city' | 'logo'>
    & { athletes?: Maybe<Array<(
      { __typename?: 'Athlete' }
      & Pick<Athlete, 'lastname'>
      & { category?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'name'>
      )> }
    )>>, athletesAggregate: (
      { __typename?: 'BoxAthletesAggregateResponse' }
      & { count?: Maybe<(
        { __typename?: 'BoxAthletesCountAggregate' }
        & Pick<BoxAthletesCountAggregate, 'firstname'>
      )> }
    ) }
  )> }
);

export type UpdateOneBoxMutationVariables = Exact<{
  input: UpdateOneBoxInput;
}>;


export type UpdateOneBoxMutation = (
  { __typename?: 'Mutation' }
  & { updateOneBox: (
    { __typename?: 'Box' }
    & Pick<Box, 'id'>
  ) }
);

export type CreateOneCompetitionMutationVariables = Exact<{
  input: CreateOneCompetitionInput;
}>;


export type CreateOneCompetitionMutation = (
  { __typename?: 'Mutation' }
  & { createOneCompetition: (
    { __typename?: 'Competition' }
    & Pick<Competition, 'id'>
  ) }
);

export type DeleteOneCompetitionMutationVariables = Exact<{
  input: DeleteOneInput;
}>;


export type DeleteOneCompetitionMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneCompetition: (
    { __typename?: 'CompetitionDeleteResponse' }
    & Pick<CompetitionDeleteResponse, 'id'>
  ) }
);

export type GetCompetitionByIdAdminQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCompetitionByIdAdminQuery = (
  { __typename?: 'Query' }
  & { competition?: Maybe<(
    { __typename?: 'Competition' }
    & Pick<Competition, 'id' | 'name' | 'place' | 'season'>
    & { categories?: Maybe<Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )>> }
  )> }
);

export type ListCompetitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCompetitionsQuery = (
  { __typename?: 'Query' }
  & { competitions: Array<(
    { __typename?: 'Competition' }
    & Pick<Competition, 'id' | 'name' | 'place' | 'season'>
    & { categories?: Maybe<Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )>> }
  )> }
);

export type UpdateOneCompetitionMutationVariables = Exact<{
  input: UpdateOneCompetitionInput;
}>;


export type UpdateOneCompetitionMutation = (
  { __typename?: 'Mutation' }
  & { updateOneCompetition: (
    { __typename?: 'Competition' }
    & Pick<Competition, 'id'>
  ) }
);

export type CreateOneCompetitionRankMutationVariables = Exact<{
  input: CreateOneCompetitionRankInput;
}>;


export type CreateOneCompetitionRankMutation = (
  { __typename?: 'Mutation' }
  & { createOneCompetitionRank: (
    { __typename?: 'CompetitionRank' }
    & Pick<CompetitionRank, 'id'>
  ) }
);

export type ListFilteredAthletesQueryVariables = Exact<{
  filter?: Maybe<AthleteFilter>;
  filterRank?: Maybe<CompetitionRankFilter>;
}>;


export type ListFilteredAthletesQuery = (
  { __typename?: 'Query' }
  & { athletes: Array<(
    { __typename?: 'Athlete' }
    & Pick<Athlete, 'id' | 'firstname' | 'lastname'>
    & { category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id'>
    )>, box?: Maybe<(
      { __typename?: 'Box' }
      & Pick<Box, 'id' | 'name'>
    )>, competitionRanks?: Maybe<Array<(
      { __typename?: 'CompetitionRank' }
      & Pick<CompetitionRank, 'id' | 'points' | 'rank'>
      & { competition?: Maybe<(
        { __typename?: 'Competition' }
        & Pick<Competition, 'id'>
      )>, category?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'id'>
      )> }
    )>> }
  )> }
);

export type UpdateOneCompetitionRankMutationVariables = Exact<{
  input: UpdateOneCompetitionRankInput;
}>;


export type UpdateOneCompetitionRankMutation = (
  { __typename?: 'Mutation' }
  & { updateOneCompetitionRank: (
    { __typename?: 'CompetitionRank' }
    & Pick<CompetitionRank, 'id'>
  ) }
);

export type ListAtletesQueryVariables = Exact<{
  filter?: Maybe<AthleteFilter>;
}>;


export type ListAtletesQuery = (
  { __typename?: 'Query' }
  & { athletes: Array<(
    { __typename?: 'Athlete' }
    & Pick<Athlete, 'id' | 'firstname' | 'lastname'>
    & { competitions?: Maybe<Array<(
      { __typename?: 'Competition' }
      & Pick<Competition, 'id' | 'name' | 'season'>
    )>>, box?: Maybe<(
      { __typename?: 'Box' }
      & Pick<Box, 'name' | 'city' | 'logo'>
    )>, category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'name'>
    )> }
  )> }
);

export type ListAllBoxesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAllBoxesQuery = (
  { __typename?: 'Query' }
  & { boxes: Array<(
    { __typename?: 'Box' }
    & Pick<Box, 'id' | 'name' | 'city' | 'logo'>
    & { athletes?: Maybe<Array<(
      { __typename?: 'Athlete' }
      & Pick<Athlete, 'firstname' | 'lastname'>
      & { category?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'name'>
      )> }
    )>>, athletesAggregate: (
      { __typename?: 'BoxAthletesAggregateResponse' }
      & { count?: Maybe<(
        { __typename?: 'BoxAthletesCountAggregate' }
        & Pick<BoxAthletesCountAggregate, 'id'>
      )> }
    ) }
  )> }
);

export type GetCompetitionByIdQueryVariables = Exact<{
  filter: CompetitionRankFilter;
}>;


export type GetCompetitionByIdQuery = (
  { __typename?: 'Query' }
  & { competitionRanks: Array<(
    { __typename?: 'CompetitionRank' }
    & Pick<CompetitionRank, 'rank' | 'id' | 'points'>
    & { athlete?: Maybe<(
      { __typename?: 'Athlete' }
      & Pick<Athlete, 'id' | 'firstname' | 'lastname'>
      & { box?: Maybe<(
        { __typename?: 'Box' }
        & Pick<Box, 'id' | 'name' | 'logo'>
      )> }
    )> }
  )> }
);

export type ListCompetitionsBySeasonQueryVariables = Exact<{
  filter?: Maybe<CompetitionFilter>;
}>;


export type ListCompetitionsBySeasonQuery = (
  { __typename?: 'Query' }
  & { competitions: Array<(
    { __typename?: 'Competition' }
    & Pick<Competition, 'id' | 'name'>
  )> }
);

export type ListCompetitionsLeaderboardQueryVariables = Exact<{
  filter?: Maybe<AthleteFilter>;
}>;


export type ListCompetitionsLeaderboardQuery = (
  { __typename?: 'Query' }
  & { athletes: Array<(
    { __typename?: 'Athlete' }
    & Pick<Athlete, 'id' | 'firstname' | 'lastname'>
    & { box?: Maybe<(
      { __typename?: 'Box' }
      & Pick<Box, 'id' | 'name' | 'logo'>
    )>, competitionRanks?: Maybe<Array<(
      { __typename?: 'CompetitionRank' }
      & Pick<CompetitionRank, 'id' | 'rank' | 'points'>
      & { competition?: Maybe<(
        { __typename?: 'Competition' }
        & Pick<Competition, 'name'>
      )> }
    )>>, competitionRanksAggregate: (
      { __typename?: 'AthleteCompetitionRanksAggregateResponse' }
      & { sum?: Maybe<(
        { __typename?: 'AthleteCompetitionRanksSumAggregate' }
        & Pick<AthleteCompetitionRanksSumAggregate, 'points'>
      )> }
    ) }
  )> }
);

export type AdminLoginMutationVariables = Exact<{
  data: AuthInput;
}>;


export type AdminLoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthType' }
    & Pick<AuthType, 'token'>
    & { admin: (
      { __typename?: 'Admin' }
      & Pick<Admin, 'id' | 'name' | 'email'>
    ) }
  ) }
);


export const SelectBoxesDocument = gql`
    query selectBoxes {
  boxes {
    id
    name
  }
}
    `;

/**
 * __useSelectBoxesQuery__
 *
 * To run a query within a React component, call `useSelectBoxesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectBoxesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectBoxesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelectBoxesQuery(baseOptions?: Apollo.QueryHookOptions<SelectBoxesQuery, SelectBoxesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SelectBoxesQuery, SelectBoxesQueryVariables>(SelectBoxesDocument, options);
      }
export function useSelectBoxesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectBoxesQuery, SelectBoxesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SelectBoxesQuery, SelectBoxesQueryVariables>(SelectBoxesDocument, options);
        }
export type SelectBoxesQueryHookResult = ReturnType<typeof useSelectBoxesQuery>;
export type SelectBoxesLazyQueryHookResult = ReturnType<typeof useSelectBoxesLazyQuery>;
export type SelectBoxesQueryResult = Apollo.QueryResult<SelectBoxesQuery, SelectBoxesQueryVariables>;
export const SelectCategoriesDocument = gql`
    query selectCategories {
  categories {
    id
    name
  }
}
    `;

/**
 * __useSelectCategoriesQuery__
 *
 * To run a query within a React component, call `useSelectCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelectCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<SelectCategoriesQuery, SelectCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SelectCategoriesQuery, SelectCategoriesQueryVariables>(SelectCategoriesDocument, options);
      }
export function useSelectCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectCategoriesQuery, SelectCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SelectCategoriesQuery, SelectCategoriesQueryVariables>(SelectCategoriesDocument, options);
        }
export type SelectCategoriesQueryHookResult = ReturnType<typeof useSelectCategoriesQuery>;
export type SelectCategoriesLazyQueryHookResult = ReturnType<typeof useSelectCategoriesLazyQuery>;
export type SelectCategoriesQueryResult = Apollo.QueryResult<SelectCategoriesQuery, SelectCategoriesQueryVariables>;
export const SelectCompetitionsDocument = gql`
    query selectCompetitions {
  competitions {
    id
    name
    season
  }
}
    `;

/**
 * __useSelectCompetitionsQuery__
 *
 * To run a query within a React component, call `useSelectCompetitionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectCompetitionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectCompetitionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelectCompetitionsQuery(baseOptions?: Apollo.QueryHookOptions<SelectCompetitionsQuery, SelectCompetitionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SelectCompetitionsQuery, SelectCompetitionsQueryVariables>(SelectCompetitionsDocument, options);
      }
export function useSelectCompetitionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectCompetitionsQuery, SelectCompetitionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SelectCompetitionsQuery, SelectCompetitionsQueryVariables>(SelectCompetitionsDocument, options);
        }
export type SelectCompetitionsQueryHookResult = ReturnType<typeof useSelectCompetitionsQuery>;
export type SelectCompetitionsLazyQueryHookResult = ReturnType<typeof useSelectCompetitionsLazyQuery>;
export type SelectCompetitionsQueryResult = Apollo.QueryResult<SelectCompetitionsQuery, SelectCompetitionsQueryVariables>;
export const SelectFilteredCategoriesByCompetitionDocument = gql`
    query selectFilteredCategoriesByCompetition($filter: CategoryFilter) {
  categories {
    id
    name
  }
}
    `;

/**
 * __useSelectFilteredCategoriesByCompetitionQuery__
 *
 * To run a query within a React component, call `useSelectFilteredCategoriesByCompetitionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectFilteredCategoriesByCompetitionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectFilteredCategoriesByCompetitionQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useSelectFilteredCategoriesByCompetitionQuery(baseOptions?: Apollo.QueryHookOptions<SelectFilteredCategoriesByCompetitionQuery, SelectFilteredCategoriesByCompetitionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SelectFilteredCategoriesByCompetitionQuery, SelectFilteredCategoriesByCompetitionQueryVariables>(SelectFilteredCategoriesByCompetitionDocument, options);
      }
export function useSelectFilteredCategoriesByCompetitionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectFilteredCategoriesByCompetitionQuery, SelectFilteredCategoriesByCompetitionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SelectFilteredCategoriesByCompetitionQuery, SelectFilteredCategoriesByCompetitionQueryVariables>(SelectFilteredCategoriesByCompetitionDocument, options);
        }
export type SelectFilteredCategoriesByCompetitionQueryHookResult = ReturnType<typeof useSelectFilteredCategoriesByCompetitionQuery>;
export type SelectFilteredCategoriesByCompetitionLazyQueryHookResult = ReturnType<typeof useSelectFilteredCategoriesByCompetitionLazyQuery>;
export type SelectFilteredCategoriesByCompetitionQueryResult = Apollo.QueryResult<SelectFilteredCategoriesByCompetitionQuery, SelectFilteredCategoriesByCompetitionQueryVariables>;
export const SelectFilteredCompetitionsBySeasonDocument = gql`
    query selectFilteredCompetitionsBySeason($filter: CompetitionFilter) {
  competitions(filter: $filter) {
    id
    name
  }
}
    `;

/**
 * __useSelectFilteredCompetitionsBySeasonQuery__
 *
 * To run a query within a React component, call `useSelectFilteredCompetitionsBySeasonQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectFilteredCompetitionsBySeasonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectFilteredCompetitionsBySeasonQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useSelectFilteredCompetitionsBySeasonQuery(baseOptions?: Apollo.QueryHookOptions<SelectFilteredCompetitionsBySeasonQuery, SelectFilteredCompetitionsBySeasonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SelectFilteredCompetitionsBySeasonQuery, SelectFilteredCompetitionsBySeasonQueryVariables>(SelectFilteredCompetitionsBySeasonDocument, options);
      }
export function useSelectFilteredCompetitionsBySeasonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectFilteredCompetitionsBySeasonQuery, SelectFilteredCompetitionsBySeasonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SelectFilteredCompetitionsBySeasonQuery, SelectFilteredCompetitionsBySeasonQueryVariables>(SelectFilteredCompetitionsBySeasonDocument, options);
        }
export type SelectFilteredCompetitionsBySeasonQueryHookResult = ReturnType<typeof useSelectFilteredCompetitionsBySeasonQuery>;
export type SelectFilteredCompetitionsBySeasonLazyQueryHookResult = ReturnType<typeof useSelectFilteredCompetitionsBySeasonLazyQuery>;
export type SelectFilteredCompetitionsBySeasonQueryResult = Apollo.QueryResult<SelectFilteredCompetitionsBySeasonQuery, SelectFilteredCompetitionsBySeasonQueryVariables>;
export const CreateOneAdminDocument = gql`
    mutation createOneAdmin($input: CreateOneAdminInput!) {
  createOneAdmin(input: $input) {
    id
  }
}
    `;
export type CreateOneAdminMutationFn = Apollo.MutationFunction<CreateOneAdminMutation, CreateOneAdminMutationVariables>;

/**
 * __useCreateOneAdminMutation__
 *
 * To run a mutation, you first call `useCreateOneAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneAdminMutation, { data, loading, error }] = useCreateOneAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneAdminMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneAdminMutation, CreateOneAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneAdminMutation, CreateOneAdminMutationVariables>(CreateOneAdminDocument, options);
      }
export type CreateOneAdminMutationHookResult = ReturnType<typeof useCreateOneAdminMutation>;
export type CreateOneAdminMutationResult = Apollo.MutationResult<CreateOneAdminMutation>;
export type CreateOneAdminMutationOptions = Apollo.BaseMutationOptions<CreateOneAdminMutation, CreateOneAdminMutationVariables>;
export const GetAdminByIdDocument = gql`
    query getAdminById($id: ID!) {
  admin(id: $id) {
    id
    name
    email
  }
}
    `;

/**
 * __useGetAdminByIdQuery__
 *
 * To run a query within a React component, call `useGetAdminByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdminByIdQuery(baseOptions: Apollo.QueryHookOptions<GetAdminByIdQuery, GetAdminByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminByIdQuery, GetAdminByIdQueryVariables>(GetAdminByIdDocument, options);
      }
export function useGetAdminByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminByIdQuery, GetAdminByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminByIdQuery, GetAdminByIdQueryVariables>(GetAdminByIdDocument, options);
        }
export type GetAdminByIdQueryHookResult = ReturnType<typeof useGetAdminByIdQuery>;
export type GetAdminByIdLazyQueryHookResult = ReturnType<typeof useGetAdminByIdLazyQuery>;
export type GetAdminByIdQueryResult = Apollo.QueryResult<GetAdminByIdQuery, GetAdminByIdQueryVariables>;
export const ListAdminsDocument = gql`
    query listAdmins {
  admins {
    id
    name
    email
  }
}
    `;

/**
 * __useListAdminsQuery__
 *
 * To run a query within a React component, call `useListAdminsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAdminsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAdminsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListAdminsQuery(baseOptions?: Apollo.QueryHookOptions<ListAdminsQuery, ListAdminsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAdminsQuery, ListAdminsQueryVariables>(ListAdminsDocument, options);
      }
export function useListAdminsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAdminsQuery, ListAdminsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAdminsQuery, ListAdminsQueryVariables>(ListAdminsDocument, options);
        }
export type ListAdminsQueryHookResult = ReturnType<typeof useListAdminsQuery>;
export type ListAdminsLazyQueryHookResult = ReturnType<typeof useListAdminsLazyQuery>;
export type ListAdminsQueryResult = Apollo.QueryResult<ListAdminsQuery, ListAdminsQueryVariables>;
export const UpdateOneAdminDocument = gql`
    mutation updateOneAdmin($input: UpdateOneAdminInput!) {
  updateOneAdmin(input: $input) {
    id
  }
}
    `;
export type UpdateOneAdminMutationFn = Apollo.MutationFunction<UpdateOneAdminMutation, UpdateOneAdminMutationVariables>;

/**
 * __useUpdateOneAdminMutation__
 *
 * To run a mutation, you first call `useUpdateOneAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneAdminMutation, { data, loading, error }] = useUpdateOneAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneAdminMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneAdminMutation, UpdateOneAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneAdminMutation, UpdateOneAdminMutationVariables>(UpdateOneAdminDocument, options);
      }
export type UpdateOneAdminMutationHookResult = ReturnType<typeof useUpdateOneAdminMutation>;
export type UpdateOneAdminMutationResult = Apollo.MutationResult<UpdateOneAdminMutation>;
export type UpdateOneAdminMutationOptions = Apollo.BaseMutationOptions<UpdateOneAdminMutation, UpdateOneAdminMutationVariables>;
export const AddCompetitionsToAthleteDocument = gql`
    mutation addCompetitionsToAthlete($input: RelationsInput!) {
  addCompetitionsToAthlete(input: $input) {
    id
  }
}
    `;
export type AddCompetitionsToAthleteMutationFn = Apollo.MutationFunction<AddCompetitionsToAthleteMutation, AddCompetitionsToAthleteMutationVariables>;

/**
 * __useAddCompetitionsToAthleteMutation__
 *
 * To run a mutation, you first call `useAddCompetitionsToAthleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCompetitionsToAthleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCompetitionsToAthleteMutation, { data, loading, error }] = useAddCompetitionsToAthleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCompetitionsToAthleteMutation(baseOptions?: Apollo.MutationHookOptions<AddCompetitionsToAthleteMutation, AddCompetitionsToAthleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCompetitionsToAthleteMutation, AddCompetitionsToAthleteMutationVariables>(AddCompetitionsToAthleteDocument, options);
      }
export type AddCompetitionsToAthleteMutationHookResult = ReturnType<typeof useAddCompetitionsToAthleteMutation>;
export type AddCompetitionsToAthleteMutationResult = Apollo.MutationResult<AddCompetitionsToAthleteMutation>;
export type AddCompetitionsToAthleteMutationOptions = Apollo.BaseMutationOptions<AddCompetitionsToAthleteMutation, AddCompetitionsToAthleteMutationVariables>;
export const CreateOneAthleteDocument = gql`
    mutation createOneAthlete($input: CreateOneAthleteInput!) {
  createOneAthlete(input: $input) {
    id
  }
}
    `;
export type CreateOneAthleteMutationFn = Apollo.MutationFunction<CreateOneAthleteMutation, CreateOneAthleteMutationVariables>;

/**
 * __useCreateOneAthleteMutation__
 *
 * To run a mutation, you first call `useCreateOneAthleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneAthleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneAthleteMutation, { data, loading, error }] = useCreateOneAthleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneAthleteMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneAthleteMutation, CreateOneAthleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneAthleteMutation, CreateOneAthleteMutationVariables>(CreateOneAthleteDocument, options);
      }
export type CreateOneAthleteMutationHookResult = ReturnType<typeof useCreateOneAthleteMutation>;
export type CreateOneAthleteMutationResult = Apollo.MutationResult<CreateOneAthleteMutation>;
export type CreateOneAthleteMutationOptions = Apollo.BaseMutationOptions<CreateOneAthleteMutation, CreateOneAthleteMutationVariables>;
export const DeleteOneAthleteDocument = gql`
    mutation deleteOneAthlete($input: DeleteOneInput!) {
  deleteOneAthlete(input: $input) {
    id
  }
}
    `;
export type DeleteOneAthleteMutationFn = Apollo.MutationFunction<DeleteOneAthleteMutation, DeleteOneAthleteMutationVariables>;

/**
 * __useDeleteOneAthleteMutation__
 *
 * To run a mutation, you first call `useDeleteOneAthleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneAthleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneAthleteMutation, { data, loading, error }] = useDeleteOneAthleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneAthleteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneAthleteMutation, DeleteOneAthleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneAthleteMutation, DeleteOneAthleteMutationVariables>(DeleteOneAthleteDocument, options);
      }
export type DeleteOneAthleteMutationHookResult = ReturnType<typeof useDeleteOneAthleteMutation>;
export type DeleteOneAthleteMutationResult = Apollo.MutationResult<DeleteOneAthleteMutation>;
export type DeleteOneAthleteMutationOptions = Apollo.BaseMutationOptions<DeleteOneAthleteMutation, DeleteOneAthleteMutationVariables>;
export const GetAthleteByIdDocument = gql`
    query getAthleteById($id: ID!) {
  athlete(id: $id) {
    id
    firstname
    lastname
    category {
      id
      name
    }
    box {
      id
      name
    }
    competitions {
      id
      name
      season
    }
  }
}
    `;

/**
 * __useGetAthleteByIdQuery__
 *
 * To run a query within a React component, call `useGetAthleteByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAthleteByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAthleteByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAthleteByIdQuery(baseOptions: Apollo.QueryHookOptions<GetAthleteByIdQuery, GetAthleteByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAthleteByIdQuery, GetAthleteByIdQueryVariables>(GetAthleteByIdDocument, options);
      }
export function useGetAthleteByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAthleteByIdQuery, GetAthleteByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAthleteByIdQuery, GetAthleteByIdQueryVariables>(GetAthleteByIdDocument, options);
        }
export type GetAthleteByIdQueryHookResult = ReturnType<typeof useGetAthleteByIdQuery>;
export type GetAthleteByIdLazyQueryHookResult = ReturnType<typeof useGetAthleteByIdLazyQuery>;
export type GetAthleteByIdQueryResult = Apollo.QueryResult<GetAthleteByIdQuery, GetAthleteByIdQueryVariables>;
export const ListAthletesAdminDocument = gql`
    query listAthletesAdmin {
  athletes {
    id
    firstname
    lastname
    competitions {
      id
      name
      season
    }
    box {
      id
      name
      city
      logo
    }
    category {
      id
      name
    }
  }
}
    `;

/**
 * __useListAthletesAdminQuery__
 *
 * To run a query within a React component, call `useListAthletesAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAthletesAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAthletesAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useListAthletesAdminQuery(baseOptions?: Apollo.QueryHookOptions<ListAthletesAdminQuery, ListAthletesAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAthletesAdminQuery, ListAthletesAdminQueryVariables>(ListAthletesAdminDocument, options);
      }
export function useListAthletesAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAthletesAdminQuery, ListAthletesAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAthletesAdminQuery, ListAthletesAdminQueryVariables>(ListAthletesAdminDocument, options);
        }
export type ListAthletesAdminQueryHookResult = ReturnType<typeof useListAthletesAdminQuery>;
export type ListAthletesAdminLazyQueryHookResult = ReturnType<typeof useListAthletesAdminLazyQuery>;
export type ListAthletesAdminQueryResult = Apollo.QueryResult<ListAthletesAdminQuery, ListAthletesAdminQueryVariables>;
export const RemoveCompetitionsFromAthleteDocument = gql`
    mutation removeCompetitionsFromAthlete($input: RelationsInput!) {
  removeCompetitionsFromAthlete(input: $input) {
    id
  }
}
    `;
export type RemoveCompetitionsFromAthleteMutationFn = Apollo.MutationFunction<RemoveCompetitionsFromAthleteMutation, RemoveCompetitionsFromAthleteMutationVariables>;

/**
 * __useRemoveCompetitionsFromAthleteMutation__
 *
 * To run a mutation, you first call `useRemoveCompetitionsFromAthleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCompetitionsFromAthleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCompetitionsFromAthleteMutation, { data, loading, error }] = useRemoveCompetitionsFromAthleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveCompetitionsFromAthleteMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCompetitionsFromAthleteMutation, RemoveCompetitionsFromAthleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCompetitionsFromAthleteMutation, RemoveCompetitionsFromAthleteMutationVariables>(RemoveCompetitionsFromAthleteDocument, options);
      }
export type RemoveCompetitionsFromAthleteMutationHookResult = ReturnType<typeof useRemoveCompetitionsFromAthleteMutation>;
export type RemoveCompetitionsFromAthleteMutationResult = Apollo.MutationResult<RemoveCompetitionsFromAthleteMutation>;
export type RemoveCompetitionsFromAthleteMutationOptions = Apollo.BaseMutationOptions<RemoveCompetitionsFromAthleteMutation, RemoveCompetitionsFromAthleteMutationVariables>;
export const UpdateOneAthleteDocument = gql`
    mutation updateOneAthlete($input: UpdateOneAthleteInput!) {
  updateOneAthlete(input: $input) {
    id
  }
}
    `;
export type UpdateOneAthleteMutationFn = Apollo.MutationFunction<UpdateOneAthleteMutation, UpdateOneAthleteMutationVariables>;

/**
 * __useUpdateOneAthleteMutation__
 *
 * To run a mutation, you first call `useUpdateOneAthleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneAthleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneAthleteMutation, { data, loading, error }] = useUpdateOneAthleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneAthleteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneAthleteMutation, UpdateOneAthleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneAthleteMutation, UpdateOneAthleteMutationVariables>(UpdateOneAthleteDocument, options);
      }
export type UpdateOneAthleteMutationHookResult = ReturnType<typeof useUpdateOneAthleteMutation>;
export type UpdateOneAthleteMutationResult = Apollo.MutationResult<UpdateOneAthleteMutation>;
export type UpdateOneAthleteMutationOptions = Apollo.BaseMutationOptions<UpdateOneAthleteMutation, UpdateOneAthleteMutationVariables>;
export const CreateOneBoxDocument = gql`
    mutation createOneBox($input: CreateOneBoxInput!) {
  createOneBox(input: $input) {
    id
  }
}
    `;
export type CreateOneBoxMutationFn = Apollo.MutationFunction<CreateOneBoxMutation, CreateOneBoxMutationVariables>;

/**
 * __useCreateOneBoxMutation__
 *
 * To run a mutation, you first call `useCreateOneBoxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneBoxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneBoxMutation, { data, loading, error }] = useCreateOneBoxMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneBoxMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneBoxMutation, CreateOneBoxMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneBoxMutation, CreateOneBoxMutationVariables>(CreateOneBoxDocument, options);
      }
export type CreateOneBoxMutationHookResult = ReturnType<typeof useCreateOneBoxMutation>;
export type CreateOneBoxMutationResult = Apollo.MutationResult<CreateOneBoxMutation>;
export type CreateOneBoxMutationOptions = Apollo.BaseMutationOptions<CreateOneBoxMutation, CreateOneBoxMutationVariables>;
export const DeleteOneBoxDocument = gql`
    mutation deleteOneBox($input: DeleteOneInput!) {
  deleteOneBox(input: $input) {
    id
  }
}
    `;
export type DeleteOneBoxMutationFn = Apollo.MutationFunction<DeleteOneBoxMutation, DeleteOneBoxMutationVariables>;

/**
 * __useDeleteOneBoxMutation__
 *
 * To run a mutation, you first call `useDeleteOneBoxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneBoxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneBoxMutation, { data, loading, error }] = useDeleteOneBoxMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneBoxMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneBoxMutation, DeleteOneBoxMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneBoxMutation, DeleteOneBoxMutationVariables>(DeleteOneBoxDocument, options);
      }
export type DeleteOneBoxMutationHookResult = ReturnType<typeof useDeleteOneBoxMutation>;
export type DeleteOneBoxMutationResult = Apollo.MutationResult<DeleteOneBoxMutation>;
export type DeleteOneBoxMutationOptions = Apollo.BaseMutationOptions<DeleteOneBoxMutation, DeleteOneBoxMutationVariables>;
export const GetBoxByIdDocument = gql`
    query getBoxById($id: ID!) {
  box(id: $id) {
    id
    name
    logo
    city
  }
}
    `;

/**
 * __useGetBoxByIdQuery__
 *
 * To run a query within a React component, call `useGetBoxByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoxByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoxByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBoxByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBoxByIdQuery, GetBoxByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoxByIdQuery, GetBoxByIdQueryVariables>(GetBoxByIdDocument, options);
      }
export function useGetBoxByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoxByIdQuery, GetBoxByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoxByIdQuery, GetBoxByIdQueryVariables>(GetBoxByIdDocument, options);
        }
export type GetBoxByIdQueryHookResult = ReturnType<typeof useGetBoxByIdQuery>;
export type GetBoxByIdLazyQueryHookResult = ReturnType<typeof useGetBoxByIdLazyQuery>;
export type GetBoxByIdQueryResult = Apollo.QueryResult<GetBoxByIdQuery, GetBoxByIdQueryVariables>;
export const ListBoxesDocument = gql`
    query listBoxes {
  boxes {
    id
    name
    city
    logo
    athletes {
      lastname
      category {
        name
      }
    }
    athletesAggregate {
      count {
        firstname
      }
    }
  }
}
    `;

/**
 * __useListBoxesQuery__
 *
 * To run a query within a React component, call `useListBoxesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBoxesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBoxesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListBoxesQuery(baseOptions?: Apollo.QueryHookOptions<ListBoxesQuery, ListBoxesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListBoxesQuery, ListBoxesQueryVariables>(ListBoxesDocument, options);
      }
export function useListBoxesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBoxesQuery, ListBoxesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListBoxesQuery, ListBoxesQueryVariables>(ListBoxesDocument, options);
        }
export type ListBoxesQueryHookResult = ReturnType<typeof useListBoxesQuery>;
export type ListBoxesLazyQueryHookResult = ReturnType<typeof useListBoxesLazyQuery>;
export type ListBoxesQueryResult = Apollo.QueryResult<ListBoxesQuery, ListBoxesQueryVariables>;
export const UpdateOneBoxDocument = gql`
    mutation updateOneBox($input: UpdateOneBoxInput!) {
  updateOneBox(input: $input) {
    id
  }
}
    `;
export type UpdateOneBoxMutationFn = Apollo.MutationFunction<UpdateOneBoxMutation, UpdateOneBoxMutationVariables>;

/**
 * __useUpdateOneBoxMutation__
 *
 * To run a mutation, you first call `useUpdateOneBoxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneBoxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneBoxMutation, { data, loading, error }] = useUpdateOneBoxMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneBoxMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneBoxMutation, UpdateOneBoxMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneBoxMutation, UpdateOneBoxMutationVariables>(UpdateOneBoxDocument, options);
      }
export type UpdateOneBoxMutationHookResult = ReturnType<typeof useUpdateOneBoxMutation>;
export type UpdateOneBoxMutationResult = Apollo.MutationResult<UpdateOneBoxMutation>;
export type UpdateOneBoxMutationOptions = Apollo.BaseMutationOptions<UpdateOneBoxMutation, UpdateOneBoxMutationVariables>;
export const CreateOneCompetitionDocument = gql`
    mutation createOneCompetition($input: CreateOneCompetitionInput!) {
  createOneCompetition(input: $input) {
    id
  }
}
    `;
export type CreateOneCompetitionMutationFn = Apollo.MutationFunction<CreateOneCompetitionMutation, CreateOneCompetitionMutationVariables>;

/**
 * __useCreateOneCompetitionMutation__
 *
 * To run a mutation, you first call `useCreateOneCompetitionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCompetitionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCompetitionMutation, { data, loading, error }] = useCreateOneCompetitionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneCompetitionMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneCompetitionMutation, CreateOneCompetitionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneCompetitionMutation, CreateOneCompetitionMutationVariables>(CreateOneCompetitionDocument, options);
      }
export type CreateOneCompetitionMutationHookResult = ReturnType<typeof useCreateOneCompetitionMutation>;
export type CreateOneCompetitionMutationResult = Apollo.MutationResult<CreateOneCompetitionMutation>;
export type CreateOneCompetitionMutationOptions = Apollo.BaseMutationOptions<CreateOneCompetitionMutation, CreateOneCompetitionMutationVariables>;
export const DeleteOneCompetitionDocument = gql`
    mutation deleteOneCompetition($input: DeleteOneInput!) {
  deleteOneCompetition(input: $input) {
    id
  }
}
    `;
export type DeleteOneCompetitionMutationFn = Apollo.MutationFunction<DeleteOneCompetitionMutation, DeleteOneCompetitionMutationVariables>;

/**
 * __useDeleteOneCompetitionMutation__
 *
 * To run a mutation, you first call `useDeleteOneCompetitionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCompetitionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCompetitionMutation, { data, loading, error }] = useDeleteOneCompetitionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneCompetitionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneCompetitionMutation, DeleteOneCompetitionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneCompetitionMutation, DeleteOneCompetitionMutationVariables>(DeleteOneCompetitionDocument, options);
      }
export type DeleteOneCompetitionMutationHookResult = ReturnType<typeof useDeleteOneCompetitionMutation>;
export type DeleteOneCompetitionMutationResult = Apollo.MutationResult<DeleteOneCompetitionMutation>;
export type DeleteOneCompetitionMutationOptions = Apollo.BaseMutationOptions<DeleteOneCompetitionMutation, DeleteOneCompetitionMutationVariables>;
export const GetCompetitionByIdAdminDocument = gql`
    query getCompetitionByIdAdmin($id: ID!) {
  competition(id: $id) {
    id
    name
    place
    season
    categories {
      id
      name
    }
  }
}
    `;

/**
 * __useGetCompetitionByIdAdminQuery__
 *
 * To run a query within a React component, call `useGetCompetitionByIdAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompetitionByIdAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompetitionByIdAdminQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCompetitionByIdAdminQuery(baseOptions: Apollo.QueryHookOptions<GetCompetitionByIdAdminQuery, GetCompetitionByIdAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompetitionByIdAdminQuery, GetCompetitionByIdAdminQueryVariables>(GetCompetitionByIdAdminDocument, options);
      }
export function useGetCompetitionByIdAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompetitionByIdAdminQuery, GetCompetitionByIdAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompetitionByIdAdminQuery, GetCompetitionByIdAdminQueryVariables>(GetCompetitionByIdAdminDocument, options);
        }
export type GetCompetitionByIdAdminQueryHookResult = ReturnType<typeof useGetCompetitionByIdAdminQuery>;
export type GetCompetitionByIdAdminLazyQueryHookResult = ReturnType<typeof useGetCompetitionByIdAdminLazyQuery>;
export type GetCompetitionByIdAdminQueryResult = Apollo.QueryResult<GetCompetitionByIdAdminQuery, GetCompetitionByIdAdminQueryVariables>;
export const ListCompetitionsDocument = gql`
    query listCompetitions {
  competitions {
    id
    name
    place
    season
    categories {
      id
      name
    }
  }
}
    `;

/**
 * __useListCompetitionsQuery__
 *
 * To run a query within a React component, call `useListCompetitionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCompetitionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCompetitionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCompetitionsQuery(baseOptions?: Apollo.QueryHookOptions<ListCompetitionsQuery, ListCompetitionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCompetitionsQuery, ListCompetitionsQueryVariables>(ListCompetitionsDocument, options);
      }
export function useListCompetitionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCompetitionsQuery, ListCompetitionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCompetitionsQuery, ListCompetitionsQueryVariables>(ListCompetitionsDocument, options);
        }
export type ListCompetitionsQueryHookResult = ReturnType<typeof useListCompetitionsQuery>;
export type ListCompetitionsLazyQueryHookResult = ReturnType<typeof useListCompetitionsLazyQuery>;
export type ListCompetitionsQueryResult = Apollo.QueryResult<ListCompetitionsQuery, ListCompetitionsQueryVariables>;
export const UpdateOneCompetitionDocument = gql`
    mutation updateOneCompetition($input: UpdateOneCompetitionInput!) {
  updateOneCompetition(input: $input) {
    id
  }
}
    `;
export type UpdateOneCompetitionMutationFn = Apollo.MutationFunction<UpdateOneCompetitionMutation, UpdateOneCompetitionMutationVariables>;

/**
 * __useUpdateOneCompetitionMutation__
 *
 * To run a mutation, you first call `useUpdateOneCompetitionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCompetitionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCompetitionMutation, { data, loading, error }] = useUpdateOneCompetitionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneCompetitionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneCompetitionMutation, UpdateOneCompetitionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneCompetitionMutation, UpdateOneCompetitionMutationVariables>(UpdateOneCompetitionDocument, options);
      }
export type UpdateOneCompetitionMutationHookResult = ReturnType<typeof useUpdateOneCompetitionMutation>;
export type UpdateOneCompetitionMutationResult = Apollo.MutationResult<UpdateOneCompetitionMutation>;
export type UpdateOneCompetitionMutationOptions = Apollo.BaseMutationOptions<UpdateOneCompetitionMutation, UpdateOneCompetitionMutationVariables>;
export const CreateOneCompetitionRankDocument = gql`
    mutation createOneCompetitionRank($input: CreateOneCompetitionRankInput!) {
  createOneCompetitionRank(input: $input) {
    id
  }
}
    `;
export type CreateOneCompetitionRankMutationFn = Apollo.MutationFunction<CreateOneCompetitionRankMutation, CreateOneCompetitionRankMutationVariables>;

/**
 * __useCreateOneCompetitionRankMutation__
 *
 * To run a mutation, you first call `useCreateOneCompetitionRankMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCompetitionRankMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCompetitionRankMutation, { data, loading, error }] = useCreateOneCompetitionRankMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneCompetitionRankMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneCompetitionRankMutation, CreateOneCompetitionRankMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneCompetitionRankMutation, CreateOneCompetitionRankMutationVariables>(CreateOneCompetitionRankDocument, options);
      }
export type CreateOneCompetitionRankMutationHookResult = ReturnType<typeof useCreateOneCompetitionRankMutation>;
export type CreateOneCompetitionRankMutationResult = Apollo.MutationResult<CreateOneCompetitionRankMutation>;
export type CreateOneCompetitionRankMutationOptions = Apollo.BaseMutationOptions<CreateOneCompetitionRankMutation, CreateOneCompetitionRankMutationVariables>;
export const ListFilteredAthletesDocument = gql`
    query listFilteredAthletes($filter: AthleteFilter, $filterRank: CompetitionRankFilter) {
  athletes(filter: $filter) {
    id
    firstname
    lastname
    category {
      id
    }
    box {
      id
      name
    }
    competitionRanks(filter: $filterRank) {
      id
      points
      rank
      competition {
        id
      }
      category {
        id
      }
    }
  }
}
    `;

/**
 * __useListFilteredAthletesQuery__
 *
 * To run a query within a React component, call `useListFilteredAthletesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFilteredAthletesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFilteredAthletesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      filterRank: // value for 'filterRank'
 *   },
 * });
 */
export function useListFilteredAthletesQuery(baseOptions?: Apollo.QueryHookOptions<ListFilteredAthletesQuery, ListFilteredAthletesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListFilteredAthletesQuery, ListFilteredAthletesQueryVariables>(ListFilteredAthletesDocument, options);
      }
export function useListFilteredAthletesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListFilteredAthletesQuery, ListFilteredAthletesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListFilteredAthletesQuery, ListFilteredAthletesQueryVariables>(ListFilteredAthletesDocument, options);
        }
export type ListFilteredAthletesQueryHookResult = ReturnType<typeof useListFilteredAthletesQuery>;
export type ListFilteredAthletesLazyQueryHookResult = ReturnType<typeof useListFilteredAthletesLazyQuery>;
export type ListFilteredAthletesQueryResult = Apollo.QueryResult<ListFilteredAthletesQuery, ListFilteredAthletesQueryVariables>;
export const UpdateOneCompetitionRankDocument = gql`
    mutation updateOneCompetitionRank($input: UpdateOneCompetitionRankInput!) {
  updateOneCompetitionRank(input: $input) {
    id
  }
}
    `;
export type UpdateOneCompetitionRankMutationFn = Apollo.MutationFunction<UpdateOneCompetitionRankMutation, UpdateOneCompetitionRankMutationVariables>;

/**
 * __useUpdateOneCompetitionRankMutation__
 *
 * To run a mutation, you first call `useUpdateOneCompetitionRankMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCompetitionRankMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCompetitionRankMutation, { data, loading, error }] = useUpdateOneCompetitionRankMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneCompetitionRankMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneCompetitionRankMutation, UpdateOneCompetitionRankMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneCompetitionRankMutation, UpdateOneCompetitionRankMutationVariables>(UpdateOneCompetitionRankDocument, options);
      }
export type UpdateOneCompetitionRankMutationHookResult = ReturnType<typeof useUpdateOneCompetitionRankMutation>;
export type UpdateOneCompetitionRankMutationResult = Apollo.MutationResult<UpdateOneCompetitionRankMutation>;
export type UpdateOneCompetitionRankMutationOptions = Apollo.BaseMutationOptions<UpdateOneCompetitionRankMutation, UpdateOneCompetitionRankMutationVariables>;
export const ListAtletesDocument = gql`
    query listAtletes($filter: AthleteFilter) {
  athletes(filter: $filter) {
    id
    firstname
    lastname
    competitions {
      id
      name
      season
    }
    box {
      name
      city
      logo
    }
    category {
      name
    }
  }
}
    `;

/**
 * __useListAtletesQuery__
 *
 * To run a query within a React component, call `useListAtletesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAtletesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAtletesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useListAtletesQuery(baseOptions?: Apollo.QueryHookOptions<ListAtletesQuery, ListAtletesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAtletesQuery, ListAtletesQueryVariables>(ListAtletesDocument, options);
      }
export function useListAtletesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAtletesQuery, ListAtletesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAtletesQuery, ListAtletesQueryVariables>(ListAtletesDocument, options);
        }
export type ListAtletesQueryHookResult = ReturnType<typeof useListAtletesQuery>;
export type ListAtletesLazyQueryHookResult = ReturnType<typeof useListAtletesLazyQuery>;
export type ListAtletesQueryResult = Apollo.QueryResult<ListAtletesQuery, ListAtletesQueryVariables>;
export const ListAllBoxesDocument = gql`
    query listAllBoxes {
  boxes {
    id
    name
    city
    logo
    athletes {
      firstname
      lastname
      category {
        name
      }
    }
    athletesAggregate {
      count {
        id
      }
    }
  }
}
    `;

/**
 * __useListAllBoxesQuery__
 *
 * To run a query within a React component, call `useListAllBoxesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllBoxesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAllBoxesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListAllBoxesQuery(baseOptions?: Apollo.QueryHookOptions<ListAllBoxesQuery, ListAllBoxesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAllBoxesQuery, ListAllBoxesQueryVariables>(ListAllBoxesDocument, options);
      }
export function useListAllBoxesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAllBoxesQuery, ListAllBoxesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAllBoxesQuery, ListAllBoxesQueryVariables>(ListAllBoxesDocument, options);
        }
export type ListAllBoxesQueryHookResult = ReturnType<typeof useListAllBoxesQuery>;
export type ListAllBoxesLazyQueryHookResult = ReturnType<typeof useListAllBoxesLazyQuery>;
export type ListAllBoxesQueryResult = Apollo.QueryResult<ListAllBoxesQuery, ListAllBoxesQueryVariables>;
export const GetCompetitionByIdDocument = gql`
    query getCompetitionById($filter: CompetitionRankFilter!) {
  competitionRanks(sorting: {field: rank, direction: ASC}, filter: $filter) {
    rank
    id
    points
    athlete {
      id
      firstname
      lastname
      box {
        id
        name
        logo
      }
    }
  }
}
    `;

/**
 * __useGetCompetitionByIdQuery__
 *
 * To run a query within a React component, call `useGetCompetitionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompetitionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompetitionByIdQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCompetitionByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables>(GetCompetitionByIdDocument, options);
      }
export function useGetCompetitionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables>(GetCompetitionByIdDocument, options);
        }
export type GetCompetitionByIdQueryHookResult = ReturnType<typeof useGetCompetitionByIdQuery>;
export type GetCompetitionByIdLazyQueryHookResult = ReturnType<typeof useGetCompetitionByIdLazyQuery>;
export type GetCompetitionByIdQueryResult = Apollo.QueryResult<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables>;
export const ListCompetitionsBySeasonDocument = gql`
    query listCompetitionsBySeason($filter: CompetitionFilter) {
  competitions(filter: $filter) {
    id
    name
  }
}
    `;

/**
 * __useListCompetitionsBySeasonQuery__
 *
 * To run a query within a React component, call `useListCompetitionsBySeasonQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCompetitionsBySeasonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCompetitionsBySeasonQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useListCompetitionsBySeasonQuery(baseOptions?: Apollo.QueryHookOptions<ListCompetitionsBySeasonQuery, ListCompetitionsBySeasonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCompetitionsBySeasonQuery, ListCompetitionsBySeasonQueryVariables>(ListCompetitionsBySeasonDocument, options);
      }
export function useListCompetitionsBySeasonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCompetitionsBySeasonQuery, ListCompetitionsBySeasonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCompetitionsBySeasonQuery, ListCompetitionsBySeasonQueryVariables>(ListCompetitionsBySeasonDocument, options);
        }
export type ListCompetitionsBySeasonQueryHookResult = ReturnType<typeof useListCompetitionsBySeasonQuery>;
export type ListCompetitionsBySeasonLazyQueryHookResult = ReturnType<typeof useListCompetitionsBySeasonLazyQuery>;
export type ListCompetitionsBySeasonQueryResult = Apollo.QueryResult<ListCompetitionsBySeasonQuery, ListCompetitionsBySeasonQueryVariables>;
export const ListCompetitionsLeaderboardDocument = gql`
    query listCompetitionsLeaderboard($filter: AthleteFilter) {
  athletes(filter: $filter) {
    id
    firstname
    lastname
    box {
      id
      name
      logo
    }
    competitionRanks {
      id
      rank
      points
      competition {
        name
      }
    }
    competitionRanksAggregate {
      sum {
        points
      }
    }
  }
}
    `;

/**
 * __useListCompetitionsLeaderboardQuery__
 *
 * To run a query within a React component, call `useListCompetitionsLeaderboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCompetitionsLeaderboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCompetitionsLeaderboardQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useListCompetitionsLeaderboardQuery(baseOptions?: Apollo.QueryHookOptions<ListCompetitionsLeaderboardQuery, ListCompetitionsLeaderboardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCompetitionsLeaderboardQuery, ListCompetitionsLeaderboardQueryVariables>(ListCompetitionsLeaderboardDocument, options);
      }
export function useListCompetitionsLeaderboardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCompetitionsLeaderboardQuery, ListCompetitionsLeaderboardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCompetitionsLeaderboardQuery, ListCompetitionsLeaderboardQueryVariables>(ListCompetitionsLeaderboardDocument, options);
        }
export type ListCompetitionsLeaderboardQueryHookResult = ReturnType<typeof useListCompetitionsLeaderboardQuery>;
export type ListCompetitionsLeaderboardLazyQueryHookResult = ReturnType<typeof useListCompetitionsLeaderboardLazyQuery>;
export type ListCompetitionsLeaderboardQueryResult = Apollo.QueryResult<ListCompetitionsLeaderboardQuery, ListCompetitionsLeaderboardQueryVariables>;
export const AdminLoginDocument = gql`
    mutation adminLogin($data: AuthInput!) {
  login(data: $data) {
    admin {
      id
      name
      email
    }
    token
  }
}
    `;
export type AdminLoginMutationFn = Apollo.MutationFunction<AdminLoginMutation, AdminLoginMutationVariables>;

/**
 * __useAdminLoginMutation__
 *
 * To run a mutation, you first call `useAdminLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminLoginMutation, { data, loading, error }] = useAdminLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAdminLoginMutation(baseOptions?: Apollo.MutationHookOptions<AdminLoginMutation, AdminLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminLoginMutation, AdminLoginMutationVariables>(AdminLoginDocument, options);
      }
export type AdminLoginMutationHookResult = ReturnType<typeof useAdminLoginMutation>;
export type AdminLoginMutationResult = Apollo.MutationResult<AdminLoginMutation>;
export type AdminLoginMutationOptions = Apollo.BaseMutationOptions<AdminLoginMutation, AdminLoginMutationVariables>;