import { type QuestionsRepository } from '../repositories/questions-repository'
import { QuestionComment } from '../../enterprise/entities/question-comment'
import { type QuestionCommentsRepository } from '../repositories/question-comments-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { left, right, type Either } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

interface CommentOnQuestionUseCaseRequest {
  authorId: string
  questionId: string
  content: string
}

type CommentOnQuestionUseCaseResponse = Either<
ResourceNotFoundError,
{
  questionComment: QuestionComment
}
>

export class CommentOnQuestionUseCase {
  constructor (
    private readonly questionsRepository: QuestionsRepository,
    private readonly questionCommentsRepository: QuestionCommentsRepository
  ) {}

  async execute ({
    authorId,
    questionId,
    content
  }: CommentOnQuestionUseCaseRequest): Promise<CommentOnQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (question == null) {
      return left(new ResourceNotFoundError())
    }

    const questionComment = QuestionComment.create({
      authorId: new UniqueEntityID(authorId),
      questionId: new UniqueEntityID(),
      content
    })

    await this.questionCommentsRepository.create(questionComment)

    return right({ questionComment })
  }
}
