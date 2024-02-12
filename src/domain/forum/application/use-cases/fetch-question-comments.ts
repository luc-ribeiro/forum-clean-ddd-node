import { type Either, right } from '@/core/either'
import { type QuestionComment } from '../../enterprise/entities/question-comment'
import { type QuestionCommentsRepository } from '../repositories/question-comments-repository'

interface FetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionCommentsUseCaseResponse = Either<
null,
{
  questionComments: QuestionComment[]
}
>

export class FetchQuestionCommentsUseCase {
  constructor (
    private readonly questionCommentsRepository: QuestionCommentsRepository
  ) {}

  async execute ({
    questionId,
    page
  }: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionCommentsUseCaseResponse> {
    const questionComments = await this.questionCommentsRepository.findManyByQuestionID(questionId, { page })

    return right({
      questionComments
    })
  }
}
